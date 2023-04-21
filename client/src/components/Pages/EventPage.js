import EventList from "../EventList";
import Layout from "../Layout/Layout";
import SearchComponent from "../UI/SearchComponent";
import Context from "../context/context";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Event from "../Event";
import { FloatButton } from "antd";
import './EventPage.css';

const EventPage = () => {

const {events} = useContext(Context);
const {state} = useLocation();
const [event, setEvent] = useState()


function findEventByID (id) {
  setEvent(events.find(event => event._id === id));
}

useEffect(() => {
  findEventByID(state.id)
}, [])

  return (
    <Layout>
      <p>{event ? <Event link={false} data={event}></Event> : 'loading...'}</p>

      <div>map</div>
      <section>
        <h3>Joining</h3>
        {/* <div>{event.joined}</div> */}
      </section>
      <section>
        <h3>Announcements</h3>
        {/* <div>{event.announcements}</div> */}
      </section>
      <button className="button join-button">JOIN</button>

    </Layout>
  )
}

export default EventPage;
