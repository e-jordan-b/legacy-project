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

const {events, addToJoinedEvents, removeJoinedEvent, users} = useContext(Context);
const {state} = useLocation();
const [event, setEvent] = useState(null)
const [joined, setJoined] = useState()

 function findEventByID (id) {
  const eventFound = events.find(event => event._id === id)
  setEvent(eventFound);
  setJoined(eventFound.joining)
  console.log(eventFound)
}

function getJoinedUsersInfo(userId) {
  if(users){
    let avatar = users.find(user => {
      return user._id === userId
    })
    return <Avatar src={`/${avatar.profilePicture}`} />;
  }
}


useEffect(() => {
  if(events){
    findEventByID(state.id)
  }
}, [events])

  return (
    <Layout>
        <div>{event ? <><Event link={false} data={event}></Event>
        <MapContainer className="event-page-map-container" center={[event.coordinates[0], event.coordinates[1]]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
          url="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=gLEFUdwGIyJxOzqWgXnDyQdBUquHAVUDvqJFUliKpH3e5FQ68AZTwUphVyo81Tmn"
        />
          <Marker
          position={[event.coordinates[0],event.coordinates[1]]}
          >
            </Marker>
        </MapContainer>
          <div className="divider"></div>
          <section className="event-page-section">
            <h3>Joining</h3>
            <div>{event.joined.map(joinedUserId => getJoinedUsersInfo(joinedUserId))}</div>
          </section>
          <div className="divider"></div>
          <section className="event-page-section">
            <h3>Announcements</h3>
            {/* <div>{event.announcements}</div> */}
          </section>
          {joined ? <button className="button join-button"
            onClick={()=>{
              setJoined(true)
              console.log(joined)
              removeJoinedEvent(event._id); }}>JOINED</button>
              :
              <button className="button join-button"
              onClick={()=>{
              setJoined(false)
              console.log(joined)
              addToJoinedEvents(event._id);
            }}>JOIN</button>

              }
      </>
      : 'loading...'}</div>




    </Layout>
  )
}

export default EventPage;
