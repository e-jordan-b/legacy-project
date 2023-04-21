import { useState, useContext, useEffect } from "react";
import InputComponent from "./UI/InputComponent";
import { Button, Form  } from "antd";
import Context from "./context/context";
import SelectInputComponent from "./UI/SelectInputComponent";
import ModalComponent from "./UI/ModalComponent";
import SwitchInputComponent from "./UI/SwitchInputComponent";
import NumberInputComponent from "./UI/NumberInputComponent";
import { addEvent } from "../services/event_service";
import './CreateEvent.css'

const CreateEvent = (props) => {

  const {activeUser, users} = useContext(Context);

  const [isLoading, setisLoading] = useState(true);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState('');
  const [limitAttendees, setLimitAttendees] = useState(undefined);
  const [visibility, setVisibility] = useState(true);
  const [invitees, setInvitees] = useState([]);
  const [hideFrom, sethideFrom] = useState([]);

  const [displayOptions, setDisplayOptions] = useState([]);

  const [formIsValid, setFormIsValid] = useState(false)

  function handleInputChange (e) {

    const input = e.target.name;
    if(input === 'title') setTitle(e.target.value)
    if(input === 'description') setDescription(e.target.value)
    if(input === 'date') setDate(e.target.value)
    if(input === 'location') setLocation(e.target.value)
    if(input === 'limitAttendees') setLimitAttendees(e.target.value)
  }

  function handleSwitch(){ setVisibility(!visibility) }
  function handleHideFromSelect(e) { sethideFrom(e) }
  function handleInviteesSelect(e) { setInvitees(e) }

  function handleStep (method) {
    if(method) {
      setStep(step+1);
    } else {
      setStep(step-1);
    }

  }

  function displayUserOptions () {
    console.log(users)
    let temp = []
    users.forEach(option => {
      temp.push({
        "label": option.username,
        "value": option._id
      })})
    setDisplayOptions(temp);
  }

  const handleFormSubmit = () => {
    console.log('submit login')
    const newEvent = {
      owner: activeUser._id,
      title: title,
      description: description,
      date: date,
      location: location,
      //coordinates: coordinates,
      image:"mock1-mock.jpeg" ,
      limitAttendees: limitAttendees,
      visibility: visibility,
      invitees: invitees,
      hideFrom: hideFrom
    }
    addEvent(newEvent)
  }

  useEffect(() => {
    if(users){
      displayUserOptions()
    }
  }, [users])

useEffect(() => {
    setisLoading(false)
  }, [displayOptions])

  return (

    <ModalComponent
    title="Create new Event"
    open={props.open}
    >
      <div className="create-modal-header">
        {step > 0 ? <button className="step-button back-button" onClick={()=>handleStep(false)}>BACK</button>: <p className="create-modal-title">Create new Event</p>}
        <div className="dots">. . .</div>
        {step < 2 ?
        <button className="step-button next-button" onClick={()=>handleStep(true)}>NEXT</button>
        : <Button form="create-event" type="primary" htmlType="submit">
            CREATE
          </Button> }
       </div>
       <div className="modal-form-wrapper">
      {!isLoading && <Form
        name="create-event"
        onFinish={handleFormSubmit}
        >
        {step === 0 && <>
        <Form.Item name="title" label="Title">
          <InputComponent
          id="title"
          name="title"
          type="text"
          autoComplete="title"
          required={true}
          maxLenght="220"
          placeholder="max 220 characters"
          onchange={handleInputChange}/>
        </Form.Item>

        <Form.Item name="description" label="Description">
          <InputComponent
          id="description"
          name="description"
          type="text"
          autoComplete="description"
          required={false}
          maxLength="2000"
          placeholder="max 220 characters"
          onchange={handleInputChange}/>
        </Form.Item>

        <Form.Item name="date" label="Time">
          <InputComponent
          id="date"
          name="date"
          type="datetime-local"
          autoComplete="date"
          required={true}
          placeholder="max 220 characters"
          onchange={handleInputChange}/>
        </Form.Item>

        <Form.Item name="location" label="Location">
          <InputComponent
          id="location"
          name="location"
          type="text"
          autoComplete="location"
          required={true}
          placeholder="max 220 characters"
          onchange={handleInputChange}/>
        </Form.Item>
        </>
        }

        {step === 1 && <>
        <Form.Item name="limitAttendees" label="Limit Attendees">
          <NumberInputComponent
          id="limitAttendees"
          name="limitAttendees"
          autoComplete="limitAttendees"
          required={true}
          placeholder="no limit"
          onchange={handleInputChange}
          />
        </Form.Item>

        <Form.Item name="visibility" label="Visibility">
          <SwitchInputComponent
           id="visibility"
           name="visibility"
           onchange={handleSwitch}
          />
        </Form.Item>

        {!visibility &&
          <Form.Item name="invitees" label="">
          <SelectInputComponent
           id="invitees"
           type="select"
           name="invitees"
           placeholder="select members"
           onchange={handleInviteesSelect}
           options={displayOptions}
           />
        </Form.Item>}


        <Form.Item name="hideFrom" label="Hide From">
        <SelectInputComponent
           id="invitees"
           type="select"
           name="hideFrom"
           placeholder="select members"
           onchange={handleHideFromSelect}
          options={displayOptions}
           />
        </Form.Item>
        </>
        }

        {step === 2 &&
        <>
        <div className='event-details'>
          <p>{activeUser.username}</p>
          <h2 className='title'>{title}</h2>
          <p>{location}</p>
          <p>{date}</p>
        </div>
        <Form.Item name="image" label="Image">
        <InputComponent
           id="image"
           type="file"
           name="image"
           placeholder="select picture"
           onchange={handleInputChange}
           options={displayOptions}
           />
        </Form.Item>
        </>
       }
      </Form>
      }
      </div>

      </ModalComponent>
  )
}

export default CreateEvent;