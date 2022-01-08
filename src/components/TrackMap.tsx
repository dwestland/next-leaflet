/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Nav from '@/components/Nav'

import 'leaflet/dist/leaflet.css'

// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css' // Re-uses images from ~leaflet package
// import 'leaflet-defaulticon-compatibility'

// import { Icon } from 'leaflet'
// import marker from '../../public/iss200.png'

const TrackMap = () => {
  console.log('boom')

  // const myIcon = new Icon({
  // iconUrl: marker,
  // iconRetinaUrl: marker,
  // iconSize: [64, 64],
  // iconAnchor: [32, 64],
  // popupAnchor: null,
  // shadowUrl: null,
  // shadowSize: null,
  // shadowAnchor: null,
  // })

  // const myIcon = new Icon({
  //   iconUrl: require('../../public/iss200.png'),
  //   iconSize: [30, 30],
  // })

  // const myIcon = Icon({ iconUrl: '../../public/iss200.png' })

  return (
    <>
      <MapContainer center={[33.9765, -118.4483]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[33.9765, -118.4483]}>
          {/* <Marker position={[33.9765, -118.4483]} icon={myIcon}> */}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Nav />
    </>
  )
}
export default TrackMap
