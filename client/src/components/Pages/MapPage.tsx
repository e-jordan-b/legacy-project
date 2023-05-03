/* eslint-disable no-mixed-spaces-and-tabs */
import * as L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, Tooltip} from 'react-leaflet';
import Context from '../context/context';
import React, {ReactHTMLElement, useContext, useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import SearchComponent from '../UI/SearchComponent';
import './MapPage.css';
import Event from '../Event';
import {LatLngBounds} from 'leaflet';

function LocationMarker() {
	const [position, setPosition] = useState(null);

	const ownPositionIcon = new L.Icon({
		iconUrl: '/Map_marker.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	const map = useMapEvents({
		// TS does not allow whenReady
		// whenReady: () => {
		//   map.locate()
		// },
		locationfound(e: any) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			setPosition(e.latlng);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : (
		<Marker position={position} icon={ownPositionIcon}>
			<Tooltip>You are here</Tooltip>
		</Marker>
	);
}

const MapPage = () => {
	const {events, isLoading, query} = useContext(Context);

	const eventPositionIcon = new L.Icon({
		iconUrl: '/Map_marker_events.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	function getMarkers() {
		return (events?.map((event, index) => {
			if (event.coordinates.length === 2 && event.title.toLowerCase().includes(query.toLowerCase())) {
				return (
					<Marker
						key={index}
						position={[event.coordinates[0], event.coordinates[1]]}
						icon={eventPositionIcon}>
						<Popup>
							<Event link={true} data={event}/>
						</Popup>
					</Marker>
				);
			}

			return '';
		})
		);
	}

	const aux = [52.516357, 13.378979] as unknown as L.LatLngBounds;
	return (
		<Layout>
			<SearchComponent />
			{!isLoading
        && <MapContainer className='mapContainer' center={aux} zoom={13} scrollWheelZoom={false}>
        	<TileLayer
        		attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
        		url='https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=Lxat7gsyaHnDL4HKxkcLO3VrDvJ54wKHK6PimdK6JwjzBNWNDL53V9ZPyTdYmf8U'
        	/>
        	<LocationMarker />
        	{getMarkers()}
        </MapContainer>
			}
		</Layout>
	);
};

export default MapPage;
