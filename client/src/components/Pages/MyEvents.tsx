import { useEffect, useContext, useState  } from "react";
import Context from "../context/context";
import Layout from "../Layout/Layout";
import { Tabs } from 'antd';
import EventList from "../EventList";
import LoadingComponent from "../UI/LoadingComponent";
import { EventType } from "../../@types/EventType";
// import './MyEventsPage.css';



const MyEventsPage = () => {

  const {events, activeUser} = useContext(Context);
  const [savedEvents, setSavedEvents] = useState<EventType[] | null>(null)
  const [joinedEvents, setJoinedEvents] = useState<EventType[] | null>(null)

  // const items = [
  //   {
  //     key: '1',
  //     label: `Joined events`,
  //     children: <>{joinedEvents ? <EventList events={joinedEvents} /> : "Loading..."}</>,
  //   },
  //   {
  //     key: '2',
  //     label: `Saved Events`,
  //     children: <div>{savedEvents ? <EventList events={savedEvents} /> : "Loading..."}</div>,
  //   },
  //   {
  //     key: '3',
  //     label: `Past Joined Events`,
  //     children: `Content of Tab Pane 3`,
  //   },
  // ];

useEffect(() => {

  if(events && activeUser){
    console.log('calling')
    getSavedEvents()
    getJoinedEvents()
  }
}, [activeUser, events])

async function getSavedEvents(){
  console.log('activeUser SavedEvents', activeUser && activeUser.savedEvents)
  const temp: EventType[] = []
  if(activeUser?.savedEvents){
    activeUser.savedEvents.forEach(eventId => {
      const event = events?.find(event => event._id === eventId)
      if (event) {
        temp.push(event);
      }
    })
  }
  setSavedEvents(temp)
  console.log(temp)
}

async function getJoinedEvents(){
  const temp: EventType[] = []
  await activeUser?.joinedEvents.forEach(eventId => {
    console.log(eventId)
    const event = events?.find(event => event._id === eventId)
    // temp.push(events.find(event => event._id == eventId));
    if (event) temp.push(event)
  })
  setJoinedEvents(temp)
  console.log(temp)
}


return(
  <Layout>

  <div>{savedEvents && joinedEvents ?

    <>
    <Tabs defaultActiveKey="1" items={[
    {
      key: '1',
      label: `Joined events`,
      children: <>{joinedEvents ? <EventList events={joinedEvents} /> : "Loading..."}</>,
    },
    {
      key: '2',
      label: `Saved Events`,
      children: <div>{savedEvents ? <EventList events={savedEvents} /> : "Loading..."}</div>,
    },
    {
      key: '3',
      label: `Past Joined Events`,
      children: `Content of Tab Pane 3`,
    },
  ]}/>
    </>

  : <LoadingComponent />}
  </div>
  </Layout>
)
}

export default MyEventsPage;
