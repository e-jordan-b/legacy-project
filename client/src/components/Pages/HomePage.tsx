import React, {useContext} from 'react';
import Context from '../context/context';
import EventList from '../EventList';
import Layout from '../Layout/Layout';
import SearchComponent from '../UI/SearchComponent';

const HomePage = () => {
	const {events} = useContext(Context);
	// If (events) {
	return (
		<Layout>
			<div className='no-overflow'>
				<SearchComponent />
				<EventList events={events}/>
			</div>
		</Layout>
	);
};

// Return (
// 	<></>
// );
// };

export default HomePage;
