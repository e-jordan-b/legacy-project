import React, {useContext} from 'react';
import Context from './context/context';
import Event from './Event';
import './EventList.css';
import LoadingComponent from './UI/LoadingComponent';
import {type EventType} from '../@types/EventType';

type EventListProps = {
	events: EventType[] ;
	isEventFromOwner?: boolean;
};

function EventList(props: EventListProps) {
	const {isLoading, query} = useContext(Context);

	return (
		<>
			{isLoading ? <LoadingComponent />
				: <div className='event-list' id='list'>
					{props.events.map((singleEvent: EventType, index: number) => {
						if (singleEvent.title !== '') {
							return singleEvent.title.toLowerCase().includes(query.toLowerCase()) && <>
								{index > 0 && <div className='divider'></div>}
								<Event key={singleEvent.title} link={true} data={singleEvent} isEventFromOwner={props.isEventFromOwner}/>
							</>;
						}

						return undefined;
					})}
				</div>}

		</>
	);
}

export default EventList;
