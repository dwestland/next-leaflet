/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const TrackMap = ({ lat, lng }) => {
  const myIcon = new Icon({
    iconUrl: '/iss.png',
    iconSize: [100, 53],
  })

  return (
    <MapContainer center={[lat, lng]} zoom={6}>
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[lat, lng]} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default TrackMap
