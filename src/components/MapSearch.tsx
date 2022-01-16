/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import GeoSearch from '@/components/EsriLeafletGeoSearch'

const Map = () => (
  <MapContainer
    doubleClickZoom={false}
    // id="mapId"
    zoom={14}
    center={[33.9765, -118.4483]}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <GeoSearch useMapBounds={false} />
  </MapContainer>
)

export default Map
