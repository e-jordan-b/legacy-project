import './Event.css';
import React, {useContext, useEffect, useState} from 'react';
import Context from './context/context';
import {HeartOutlined, HeartFilled, EditFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {type EventType} from '../@types/EventType';

type EventProps = {
	link?: boolean;
	string?: string;
	data: EventType;
	isEventFromOwner?: boolean;
	numberUsersJoining?: number;
};

function Event(props: EventProps) {
	const {users, addToSavedEvents, removeSavedEvent} = useContext(Context);
	const [liked, setLiked] = useState(props.data.liked);
	const [numberUsersJoiningEvent] = useState(props.numberUsersJoining ? props.numberUsersJoining : props.data.joined.length);

	function getParsedDay(day: number) {
		if (day > 3 && day < 21) {
			return `${day}th`;
		}

		switch (day % 10) {
			case 1: return `${day}st`;
			case 2: return `${day}nd`;
			case 3: return `${day}rd`;
			default: return `${day}th`;
		}
	}

	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	function formatTimeAmPm(date: Date) {
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const amOrpm = hours >= 12 ? 'pm' : 'am';
		hours %= 12;
		hours = hours ? hours : 12;
		const minutesStr = minutes < 10 ? '0' + String(minutes) : String(minutes);
		return `${hours}:${minutes} ${amOrpm}`;
	}

	// Function getNumberAttendees(joined) {
	//   if(joined.length)
	//   return joined.length;
	// }

	function getUserName(userId: string): string {
		if (users) {
			const owner = users.find(user => user._id === userId);

			if (owner) {
				return owner.username;
			}
		}

		return '';
	}

	useEffect(() => {
		console.log(numberUsersJoiningEvent);
	}, [props.numberUsersJoining]);

	return (
		<div className='event-snippet'>
			<div className='event-details'>
				<Link to={`/profile/${getUserName(props.data.owner)}`} state={{id: `${props.data.owner}`}}><p>{getUserName(props.data.owner)}</p></Link>
				{props.link ? <Link to={`/event/${props.data.title}`} state={{id: `${props.data._id}`}}><h2 className='title'>{props.data.title}</h2></Link>
					: <h2 className='event-title'>{props.data.title}</h2>
				}
				<p>{props.data.location}</p>
				<p>{`${monthNames[props.data.date.getMonth()]} ${getParsedDay(props.data.date.getDate())}`} - {formatTimeAmPm(props.data.date)}</p>
			</div>
			<div className='event-picture'>
				<img src={`https://res.cloudinary.com/dyjtzcm9r/image/upload/c_scale,w_653/v1682328789/${props.data.image}`} alt={`event ${props.data.title}`} className='event-image'/>
				<div className='event-like'>
					<p>{numberUsersJoiningEvent}</p>
					{props.isEventFromOwner ? <EditFilled />
						: <>
							{liked ? <HeartFilled onClick={() => {
								setLiked(false);
								removeSavedEvent(props.data._id);
							}}/> : <HeartOutlined onClick={() => {
								setLiked(true);
								addToSavedEvents(props.data._id);
							}}
							/> }
						</>
					}
				</div>
			</div>
		</div>
	);
}

export default Event;
