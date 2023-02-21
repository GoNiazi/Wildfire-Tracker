import GoogleMapReact from 'google-map-react'
import React from 'react'
import Locationmarker from './location-marker'
import Locationinfo from './locationinfo'
import {useState} from 'react'



const Map = ({center,zoom,eventdata}) => {
    const [locationinfo, setlocationinfo] = useState(null);
    const markers = eventdata.map((ev,index)=>{
        if(ev.categories[0].id === 8){
            return <Locationmarker key={index} lat ={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() =>setlocationinfo({id:ev.id,title: ev.title})}
            />

        }
        return null
    })
  return (
    <div className="map">
        <GoogleMapReact 
                bootstrapURLKeys = {{ key : 'AIzaSyCUd-kAk28YB7Q5m2DZWZqjNgxdnGFswRM'}}
                defaultCenter ={center}
                defaultZoom = {zoom}
        >
        {markers}
        </GoogleMapReact>
        {locationinfo && <Locationinfo info={locationinfo}/>}
      
    </div>
  )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng : -122.8756
    },
    zoom: 6
}

export default Map
