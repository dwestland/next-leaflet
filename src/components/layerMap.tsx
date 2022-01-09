import React from 'react'
// import L from 'leaflet'

// import { useLeafletContext } from '@react-leaflet/core'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import tileLayers, { DEFAULT_LAYER_NAME } from '@/constants/tileLayers'

const Map = () => {
  console.log('layerMap')

  return (
    <div>
      <MapContainer center={[33.9765, -118.4483]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[33.9765, -118.4483]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
