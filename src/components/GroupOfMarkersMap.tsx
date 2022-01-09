import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// 33.9765, -118.4483

const vectors = [
  { name: 'one', lat: 33.9765, lng: -118.4483 },
  { name: 'two', lat: 33.9865, lng: -118.4583 },
  { name: 'three', lat: 33.9965, lng: -118.4683 },
  { name: 'four', lat: 34.0065, lng: -118.4783 },
]

const GroupOfMarkersMap = () => {
  const vectorArray: [number, number][] = vectors.map((vector) => [
    vector.lat,
    vector.lng,
  ])

  return (
    <MapContainer
      bounds={vectorArray}
      // center={[33.9765, -118.4483]}
      // zoom={14}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vectors.map((vector) => (
        <Marker key={vector.name} position={[vector.lat, vector.lng]}>
          <Popup>{vector.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default GroupOfMarkersMap
