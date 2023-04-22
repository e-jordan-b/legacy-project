import { useState, useContext, useEffect } from "react";
import InputComponent from "./UI/inputs/InputComponent";
import { Button, Form  } from "antd";
import Context from "./context/context";
import SelectInputComponent from "./UI/inputs/SelectInputComponent";
import ModalComponent from "./UI/ModalComponent";
import SwitchInputComponent from "./UI/inputs/SwitchInputComponent";
import NumberInputComponent from "./UI/inputs/NumberInputComponent";
import './CreateEvent.css'
import { addEvent, sendEventPictureToCloud } from "../services/event_service";
import TextareaInputComponent from "./UI/inputs/TextareaInputComponent";
import UploadInputComponent from "./UI/inputs/UploadInputComponent";


const CreateEvent = (props) => {

  const {activeUser, users, setEvents, events} = useContext(Context);

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
  const [photo, setPhoto] = useState('');
  const [img, setImg] = useState({});
  const [firstValidation, setFirstValidation]= useState(false)
  const [image, setImage] = useState(null);
  const [displayOptions, setDisplayOptions] = useState([]);

  const [formIsValid, setFormIsValid] = useState(false)

  function handleInputChange (e) {
    const input = e.target.name;
    if(input === 'title') setTitle(e.target.value)
    if(input === 'description') setDescription(e.target.value)
    if(input === 'date') setDate(e.target.value)
    if(input === 'location') setLocation(e.target.value)
    if(input === 'limitAttendees') setLimitAttendees(e.target.value)

    if(title !== "" && date !== null && location!==""){setFirstValidation(true)}
  }

  function handleSwitch(){ setVisibility(!visibility) }
  function handleHideFromSelect(e) { sethideFrom(e) }
  function handleInviteesSelect(e) { setInvitees(e) }

  function handleImage(e){
   if(e.target.files[0]) {
    setImg({
      src: URL.createObjectURL(e.target.files[0]),
      alt: e.target.files[0].name
    })
    console.log('e.target.file', e.target.files[0])
    setPhoto(e.target.files[0])
   }
  }

  function encodeImageFileAsURL() {
    var filesSelected = document.getElementById("attachment").files;
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64

    return srcData;
    };
    fileReader.readAsDataURL(fileToLoad);
    }



  async function photoUpload (file){
    console.log('photo', photo)
    const formData = new FormData();
    formData.append("file", file);
    formData.append('upload_preset', 'unsigned');

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }

    await sendEventPictureToCloud(formData)
      .then(data=> console.log('data', data))
  }



  const handleChange = (e) => {
      console.log(props.imageUpload)
      const newImage = e.target.files[0];
      console.log('newImage', newImage)
      if(newImage){
        setImage(URL.createObjectURL(newImage));
      }

      handleImage(e);
  };

  function handleStep (method) {
    if(method) { setStep(step+1) }
    else { setStep(step-1) }
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

  const handleFirstSubmit = () => {
    handleStep(true)
  }

  const handleSecondSubmit = () => {
    handleStep(true)
  }

  const handleFormSubmit = async() => {
    const newEvent = {
      owner: activeUser._id,
      title: title,
      description: description,
      date: date,
      location: location,
      //coordinates: coordinates,
      image:"event2-mock.jpeg" ,
      limitAttendees: limitAttendees,
      visibility: visibility,
      invitees: invitees,
      hideFrom: hideFrom
    }
    await photoUpload(photo);

    addEvent(newEvent).then(()=> {
      //setEvents([...events, newEvent])
    })
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
    close={props.close}
    >
      <div className="create-modal-header">
        {step > 0 ? <button className="step-button back-button" onClick={()=>handleStep(false)}>BACK</button>: <p className="create-modal-title">Create new Event</p>}
        <div className="dots">. . .</div>

        {step === 0 &&
        <Button form="create-event-first" type="primary" htmlType="submit">
       NEXT
      </Button> }
        {step === 1 &&
        <Button form="create-event-second" type="primary" htmlType="submit">
        NEXT
       </Button>
        }

        { step === 2 && <Button form="create-event" type="primary" htmlType="submit">
            CREATE
          </Button> }
       </div>

       <div className="modal-form-wrapper">
      {!isLoading && <>
        {step === 0 &&
          <>
          <Form
        name="create-event-first"
        onFinish={handleFirstSubmit}
        >
        <Form.Item
        name="title"
        label="Title"
        >
          <InputComponent
          id="title"
          name="title"
          type="text"
          autoComplete="title"
          required={true}
          maxLength={220}
          minLength={4}
          placeholder="max 220 characters"
          onchange={handleInputChange}
          value={title}
          />
        </Form.Item>

        <Form.Item name="description" label="Description">

        <TextareaInputComponent
            id="description"
            name="description"
            type="textarea"
            autoSize={{ minRows: 2, maxRows: 6 }}
            required={props.required}
            placeholder={props.placeholder}
            onchange={handleInputChange}
            disabled={false}
            maxLength={2000}
            value={description}
        />
        </Form.Item>

        <Form.Item name="date" label="Time"
         >
          <InputComponent
          id="date"
          name="date"
          type="datetime-local"
          autoComplete="date"
          required={true}
          placeholder="max 220 characters"
          onchange={handleInputChange}
          value={date}/>
        </Form.Item>

        <Form.Item name="location" label="Location"

         >

          <InputComponent
          id="location"
          name="location"
          type="text"
          autoComplete="location"
          required={true}
          placeholder="max 220 characters"
          onchange={handleInputChange}
          value={location}/>
        </Form.Item>
        </Form>
        </>
        }
        </>
}


        {step === 1 && <>
        <Form
        name="create-event-second"
        onFinish={handleSecondSubmit}>
        <Form.Item name="limitAttendees" label="Limit Attendees">
          <NumberInputComponent
          id="limitAttendees"
          name="limitAttendees"
          autoComplete="limitAttendees"
          required={false}
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
        </Form>
        </>
        }

        {step === 2 &&
        <>
        <Form
         name="create-event"
         onFinish={handleFormSubmit}>
        <p className="preview-title">Preview</p>
        <div className="preview-details">
        <div className='event-details'>
          <p>{activeUser.username}</p>
          <h2 className='title'>{title}</h2>
          <p>{location}</p>
          <p>{date}</p>
        </div>
        <Form.Item name="image" label="Image">
            <input
                accept="image/*"
                id="photo-event-upload"
                type="file"
                onChange={handleChange} />
        {/* <UploadInputComponent
          imageUpload={handleImage}
          //  id="image"
          //  type="file"
          //  name="image"
          //  placeholder="select picture"
          //  onchange={handleInputChange}
           /> */}
        </Form.Item>
        </div>
        </Form>
        </>
       }
      </div>

      </ModalComponent>
  )
}

export default CreateEvent;