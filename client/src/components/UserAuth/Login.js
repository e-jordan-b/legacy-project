import { useContext } from "react";
import Context from "../context/context";
import InputComponent from "../UI/Input";
import { Form, Button} from "antd";
import { useState } from "react";
import { loginUser } from "../../services/user_service";

const Login = () => {
  const {navigate} = useContext(Context)
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')
  const [formIsValid, setFormIsValid] = useState(false)

  function handleInputChange (e) {
    const input = e.target.name;
    if(input === 'username') setUsername(e.target.value)
    if(input === 'password') setPassword(e.target.value)

    if(username !== '' && password !== ''){
      setFormIsValid(true)
    }else {
      setFormIsValid(false)
    }

    console.log(username, password)
  }

  const handleFormSubmit = () => {
    console.log('submit login')
    loginUser(username, password).then(()=>navigate(`/profile/aina_p`))

    //.then(()=> navigate(`/profile/${username}`))
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
          placeholder="Enter your username"
          onchange={handleInputChange}/>
        </Form.Item>

        <Form.Item name="password" label="password">
          <InputComponent
          id="password"
          name="password"
          type="password"
          autoComplete="password"
          required={true}
          placeholder="Enter your password"
          onchange={handleInputChange}/>
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

export default Login;