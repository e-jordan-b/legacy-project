import './Event.css';
import { useContext, useEffect, useState } from "react";
import Context from "./context/context";
import {HeartOutlined, HeartFilled, EditFilled} from '@ant-design/icons';
import { Link } from 'react-router-dom';
function Event ({link, data, isEventFromOwner, numberUsersJoining}) {

  const {users, addToSavedEvents, removeSavedEvent} = useContext(Context);
  const [liked, setLiked] = useState(data.liked)
  const [numberUsersJoiningEvent, setNumberUsersJoiningEvent] = useState(numberUsersJoining ? numberUsersJoining : data.joined.length)
  function getParsedDay (day) {
    if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:  return `${day}st`;
    case 2:  return `${day}nd`;
    case 3:  return `${day}rd`;
    default: return `${day}th`;
  }
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  function formatTimeAmPm(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var amOrpm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    return  `${hours}:${minutes} ${amOrpm}`;
  }

  function getNumberAttendees(joined) {
    if(joined.length)
    return joined.length;
  }

  function getUserName(userId) {
    if(users){
      const owner = users.find(user => {
        return user._id === userId
      })
      return owner.username;
    }
  }

  useEffect(()  => {
    console.log(numberUsersJoiningEvent)

  }, [numberUsersJoining])

  return (
    <div className="event-snippet">
      <div className='event-details'>
        <Link to={`/profile/${getUserName(data.owner)}`} state={{id: `${data.owner}`}}><p>{getUserName(data.owner)}</p></Link>
        {link ? <Link to={`/event/${data.title}`} state={{id: `${data._id}`}}><h2 className='title'>{data.title}</h2></Link>:
        <h2 className='event-title'>{data.title}</h2>
        }
        <p>{data.location}</p>
        <p>{`${monthNames[data.date.getMonth()]} ${getParsedDay(data.date.getDate())}`} - {formatTimeAmPm(data.date)}</p>
      </div>
      <div className='event-picture'>
        <img src={`https://res.cloudinary.com/dyjtzcm9r/image/upload/c_scale,w_653/v1682328789/${data.image}`} alt={`event ${data.title}`} className="event-image"/>
        <div className='event-like'>
          <p>{numberUsersJoiningEvent}</p>
          {isEventFromOwner ? <EditFilled /> :
          <>
          {liked ? <HeartFilled onClick={()=>{
            setLiked(false)
            removeSavedEvent(data._id);
          }}/> : <HeartOutlined onClick={()=>{
            setLiked(true)
            return addToSavedEvents(data._id); }}/> }
          </>
          }
        </div>
      </div>
    </div>
  )
}

export default Event;