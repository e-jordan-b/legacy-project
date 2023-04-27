import EventList from "../EventList";
import Layout from "../Layout/Layout";
import SearchComponent from "../UI/SearchComponent";
import Context from "../context/context";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Event from "../Event";
import { Avatar, FloatButton } from "antd";
import './EventPage.css';
import { MapContainer, TileLayer,Marker} from 'react-leaflet'


const EventPage = () => {

const {events, addToJoinedEvents, removeJoinedEvent, users, activeUser} = useContext(Context);
const {state} = useLocation();
const [event, setEvent] = useState(null)
const [joined, setJoined] = useState();
const [listUsersJoining, setListUsersJoining] = useState([]);
const [numberUsersJoining, setNumberUsersJoining] = useState()

function findEventByID (id) {
  const eventFound = events.find(event => event._id === id)
  setEvent(eventFound);
  setJoined(eventFound.joining)
  setNumberUsersJoining(eventFound.joined.length)
  setListUsersJoining(eventFound.joined);
}

function getJoinedUsersInfo(userId) {
  if(userId !==null){
    if(users){
      let avatar = users.find(user => {
        return user._id === userId
      })
      return <Avatar src={`https://res.cloudinary.com/dyjtzcm9r/image/upload/v1682429215/${avatar.profilePicture}`} />;
    }
  }
}


useEffect(() => {
  if(events){
    findEventByID(state.id)
  }
}, [events])

  return (
    <Layout>
        <div className="event-page">
        {event ? <><Event link={false} data={event} numberUsersJoining={numberUsersJoining}></Event>

        <MapContainer className="event-page-map-container" center={[event.coordinates[0], event.coordinates[1]]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
          url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=Lxat7gsyaHnDL4HKxkcLO3VrDvJ54wKHK6PimdK6JwjzBNWNDL53V9ZPyTdYmf8U"
        />
          <Marker
          position={[event.coordinates[0],event.coordinates[1]]}
          >
            </Marker>
        </MapContainer>
          <div className="divider"></div>
          <section className="event-page-section">
            <h3>Description</h3>
            <div>{event.description}
            </div>
          </section>
          <div className="divider"></div>
          <section className="event-page-section">
            <h3>Joining</h3>
            <div>{listUsersJoining.length > 0 && listUsersJoining.map(joinedUserId => {
              return getJoinedUsersInfo(joinedUserId)
            })}
            </div>
          </section>
          <div className="divider"></div>
          <section className="event-page-section">
            <h3>Announcements</h3>
            {/* <div>{event.announcements}</div> */}
          </section>

          {joined ? <button className="button join-button"
            onClick={()=>{
              setJoined(false)
              setNumberUsersJoining(numberUsersJoining-1)
              setListUsersJoining(listUsersJoining.filter(joinedUserId => joinedUserId !== activeUser._id))
              removeJoinedEvent(event._id); }}>JOINED</button>
              :
              <button className="button join-button"
              onClick={()=>{
              setJoined(true)
              setNumberUsersJoining(numberUsersJoining+1)
              setListUsersJoining([...listUsersJoining, activeUser._id])
              addToJoinedEvents(event._id);
            }}>JOIN</button>

              }
      </>
      : 'loading...'}
      </div>
    </Layout>
  )
}

export default EventPage;
