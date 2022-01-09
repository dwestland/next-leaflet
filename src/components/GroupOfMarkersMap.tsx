import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// 33.9765, -118.4483

const vectors = [
  { name: 'one', lat: 33.9765, lng: -118.4483 },
  { name: 'two', lat: 33.9766, lng: -118.4484 },
  { name: 'three', lat: 33.9767, lng: -118.4485 },
  { name: 'four', lat: 33.9768, lng: -118.4486 },
]

// const vectorArray = []

// const vectorArray = vectors.map((vector) => {

const getLatLngBounds = () => [
  [33.9765, -118.4483],
  [33.9766, -118.4484],
  [33.9767, -118.4485],
  [33.9768, -118.4486],
]

const GroupOfMarkersMap = () => (
  <MapContainer
    bounds={getLatLngBounds()}
    // center={[33.9765, -118.4483]}
    // zoom={14}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {vectors.map((vector) => {
      console.log(vector.name)
      return (
        <Marker key={vector.name} position={[vector.lat, vector.lng]}>
          <Popup>{vector.name}</Popup>
        </Marker>
      )
    })}
  </MapContainer>
)

export default GroupOfMarkersMap
