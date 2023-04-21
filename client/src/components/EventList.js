import { useContext } from "react";
import Context from "./context/context";
import Event from "./Event";
import './EventList.css';

function EventList () {
const {events, isLoading} = useContext(Context)

 return(
  <>
 {isLoading ? <p>Loading...</p> :
 <div className="event-list" id="list">
    {events.map((singleEvent, index) => {
      if(singleEvent.title !== ''){
        return <div key={`event-${index}`}>
          <div className="divider"></div>
            <Event link={true} data={singleEvent} />
          </div>
      }
      })}
  </div>}

  </>
 )
}

export default EventList