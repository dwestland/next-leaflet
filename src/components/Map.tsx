import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'

const Map = () => (
  <MapContainer center={[33.9765, -118.4483]} zoom={14}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[33.9765, -118.4483]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      <Tooltip direction="bottom" offset={[-10, 40]}>
        Tooltip for Marker
      </Tooltip>
    </Marker>
  </MapContainer>
)

export default Map
