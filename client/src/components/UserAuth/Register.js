import InputComponent from "../UI/inputs/InputComponent";
import { Form, Button} from "antd";
import { useState } from "react";
import { registerUser } from "../../services/user_service";

const Register = () => {
  const [username, setUsername] = useState('')
  const [userAge, setUserAge] = useState(14)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formIsValid, setFormIsValid] = useState(false)


  function handleInputChange (e) {
    const input = e.target.name;
    console.log(input)
    if(input === 'username') setUsername(e.target.value)
    if(input === 'userAge') setUserAge(e.target.value)
    if(input === 'password') {
      console.log('changepass')
      setPassword(e.target.value)
    }
    if(input === 'confirmPassword') setConfirmPassword(e.target.value)

    if(username !== '' && password !== '' && confirmPassword !== ''){
      setFormIsValid(true)
    }else {
      setFormIsValid(false)
    }
  }


    function handleFormSubmit (e) {
      console.log(username,userAge ,password )
    //e.preventDefault();
    registerUser(username, userAge ,password)
    .then((data) => {
      console.log(data)
    })
    return false;
  }

  return (
    <div>
      <Form
        name="control-ref"
        onFinish={handleFormSubmit}
        >
       <Form.Item name="username" label="username">
          <InputComponent
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required={true}
          placeholder="Choose a username"
          onchange={handleInputChange}/>
        </Form.Item>
        <Form.Item name="userAge" label="Age">
          <InputComponent
          id="userAge"
          name="userAge"
          type="number"
          autoComplete="user age"
          required={true}
          placeholder="Enter your age"
          //TODO: add min-max age
          onchange={handleInputChange} />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <InputComponent
          id="password"
          name="password"
          type="password"
          autoComplete="password"
          required={true}
          placeholder="Enter a password"
          //TODO: add min-max age
          onchange={handleInputChange} />
        </Form.Item>
        <Form.Item label="Confirm password" name="confirmPassword">
          <InputComponent id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="confirm-password"
            required={true}
            placeholder="confirm your password"
            onChange={handleInputChange}/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register;