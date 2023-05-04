/* eslint-disable array-callback-return */
import React, {useContext} from 'react';
import Context from './context/context';
import Event from './Event';
import './EventList.css';
import LoadingComponent from './UI/LoadingComponent';
import {type EventType} from '../@types/EventType';

type EventListProps = {
	events: EventType[] | undefined;
	isEventFromOwner?: boolean;
};

function EventList(props: EventListProps) {
	const {isLoading, query} = useContext(Context);

	return (
		<>
			{isLoading ? <LoadingComponent />
				: <div className='event-list' id='list' data-testid='loading'>
					{props.events?.map((singleEvent: EventType, index: number) => {
						if (singleEvent.title !== '') {
							return singleEvent.title.toLowerCase().includes(query.toLowerCase()) && <>
								{index > 0 && <div className='divider'></div>}
								<Event key={singleEvent.title} link={true} data={singleEvent} isEventFromOwner={props.isEventFromOwner}/>
							</>;
						}
					})}
				</div>}

		</>
	);
}

export default EventList;
