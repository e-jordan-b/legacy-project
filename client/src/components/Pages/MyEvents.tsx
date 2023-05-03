import React, {useEffect, useContext, useState} from 'react';
import Context from '../context/context';
import Layout from '../Layout/Layout';
import {Tabs} from 'antd';
import EventList from '../EventList';
import LoadingComponent from '../UI/LoadingComponent';
import {type EventType} from '../../@types/EventType';
// Import './MyEventsPage.css';

const MyEventsPage = () => {
	const {events, activeUser} = useContext(Context);
	const [savedEvents, setSavedEvents] = useState<EventType[] | undefined>(undefined);
	const [joinedEvents, setJoinedEvents] = useState<EventType[] | undefined>(undefined);

	// Const items = [
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
		if (events && activeUser) {
			console.log('calling');
			getSavedEvents().catch(Error);
			getJoinedEvents();
		}
	}, [activeUser, events]);

	async function getSavedEvents() {
		console.log('activeUser SavedEvents', activeUser ? activeUser.savedEvents : '');
		const temp: EventType[] = [];
		if (activeUser?.savedEvents) {
			activeUser.savedEvents.forEach(eventId => {
				const event = events?.find(event => event._id === eventId);
				if (event) {
					temp.push(event);
				}
			});
		}

		setSavedEvents(temp);
		console.log(temp);
	}

	function getJoinedEvents() {
		const temp: EventType[] = [];
		activeUser?.joinedEvents.forEach(eventId => {
			console.log(eventId);
			const event = events?.find(event => event._id === eventId);
			// Temp.push(events.find(event => event._id == eventId));
			if (event) {
				temp.push(event);
			}
		});
		setJoinedEvents(temp);
		console.log(temp);
	}

	return (
		<Layout>

			<div>{savedEvents && joinedEvents

				? <>
					<Tabs defaultActiveKey='1' items={[
						{
							key: '1',
							label: 'Joined events',
							children: <>{joinedEvents ? <EventList events={joinedEvents} /> : 'Loading...'}</>,
						},
						{
							key: '2',
							label: 'Saved Events',
							children: <div>{savedEvents ? <EventList events={savedEvents} /> : 'Loading...'}</div>,
						},
						{
							key: '3',
							label: 'Past Joined Events',
							children: 'Content of Tab Pane 3',
						},
					]}/>
				</>

				: <LoadingComponent />}
			</div>
		</Layout>
	);
};

export default MyEventsPage;
