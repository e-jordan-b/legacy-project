import * as L from "leaflet";
import { MapContainer, TileLayer,Marker, useMapEvents, useMap, Tooltip} from 'react-leaflet'
import Context from '../context/context';
import { useContext, useState, useEffect} from 'react';
import './MapComponent.css'

type propsType = {
  initialValue?: string[] | null;
  handleSelect?: (newCoordinates: string[]) => void;
  newCoordinates?: string[] | null;
}

const MeetingPointMarker = (props: propsType) => {
  const [position, setPosition] = useState(['',''])

  var ownPositionIcon: L.IconOptions = new L.Icon({
    iconUrl: '/Map_marker.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const map = useMapEvents({
    click(e){
      map.flyTo(e.latlng, map.getZoom())
      setPosition([e.latlng.lat, e.latlng.lng])
      if (props.handleSelect) props.handleSelect([e.latlng.lat, e.latlng.lng])
    },

  })

  useEffect(() => {
    if (props.initialValue) setPosition(props.initialValue);
  },[props.initialValue])

  return position === null ? null : (
    <Marker position={position} icon={ownPositionIcon}>
      <Tooltip>Meeting Point</Tooltip>
    </Marker>
  )
}

const RecenterAutomatically = (props: propsType) => {
  const map = useMap();
   useEffect(() => {
     map.setView(props.newCoordinates);
   }, [props.newCoordinates]);
   return null;
 }

const MapComponent = (props: propsType) => {
  const {events, isLoading} = useContext(Context);
  const [center, setCenter] = useState(props.initialValue)

  return (

    <>
      {!isLoading &&
        <MapContainer id="form-map" className="map-container-form" center={props.initialValue}
        zoom={13}
        scrollWheelZoom={false}
        >
        <TileLayer
          attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
          url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=gLEFUdwGIyJxOzqWgXnDyQdBUquHAVUDvqJFUliKpH3e5FQ68AZTwUphVyo81Tmn"
        />
        <MeetingPointMarker initialValue={props.initialValue} handleSelect={props.handleSelect} />
        <RecenterAutomatically newCoordinates={props.initialValue} />
        </MapContainer>
      }
    </>
  )


}


export default MapComponent;
