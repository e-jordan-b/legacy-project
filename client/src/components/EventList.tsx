import { useContext } from "react";
import Context from "./context/context";
import Event from "./Event";
import './EventList.css';
import LoadingComponent from "./UI/LoadingComponent";
import { EventType } from "../@types/EventType";

type eventListProps = {
  events: EventType[] ;
  isEventFromOwner?: boolean;
}

function EventList (props: eventListProps) {
const {isLoading, query} = useContext(Context)

 return(
  <>
 {isLoading ? <LoadingComponent /> :
 <div className="event-list" id="list">
    {props.events.map((singleEvent: EventType, index: number) => {
      if(singleEvent.title !== ''){
        return singleEvent.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 && <>
            {index > 0 && <div className="divider"></div>}
            <Event key={singleEvent.title} link={true} data={singleEvent} isEventFromOwner={props.isEventFromOwner}/>
            </>
      }
      })}
  </div>}

  </>
 )
}

export default EventList;