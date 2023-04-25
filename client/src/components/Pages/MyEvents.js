import { useEffect, useContext, useState  } from "react";
import Context from "../context/context";
import Layout from "../Layout/Layout";
import { Tabs } from 'antd';
import EventList from "../EventList";
import LoadingComponent from "../UI/LoadingComponent";
// import './MyEventsPage.css';



const MyEventsPage = () => {

  const {events, activeUser} = useContext(Context);
  const [savedEvents, setSavedEvents] = useState(null)
  const [joinedEvents, setJoinedEvents] = useState(null)

  const items = [
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
  ];


async function getSavedEvents(){
  const temp = []
  await activeUser.savedEvents.forEach(eventId => {
    temp.push(events.find(event => event._id == eventId));
  })
  setSavedEvents(temp)
}

async function getJoinedEvents(){
  const temp = []
  await activeUser.joinedEvents.forEach(eventId => {
    temp.push(events.find(event => event._id == eventId));

  })
  setJoinedEvents(temp)
}

useEffect(() => {
  if(events && activeUser){
    getSavedEvents()
    getJoinedEvents()
  }
}, [activeUser, events])

return(
  <Layout>

  <div>{savedEvents && joinedEvents ?
    <>
    <Tabs defaultActiveKey="1" items={items}/>
    </>

  : <LoadingComponent />}
  </div>
  </Layout>
)
}

export default MyEventsPage;
