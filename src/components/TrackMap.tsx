/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const positionArray = []

interface TrackMapProps {
  lat: number
  lng: number
}

const TrackMap: React.FC<TrackMapProps> = ({ lat, lng }) => {
  const issIcon = new Icon({
    iconUrl: '/iss.png',
    iconSize: [100, 53],
  })
  const dotIcon = new Icon({
    iconUrl: '/dot.png',
    iconSize: [9, 9],
  })

  console.log('%c lat ', 'background: green; color: white', lat)
  console.log('%c lng ', 'background: green; color: white', lng)

  useEffect(() => {
    positionArray.push([lat, lng])
  }, [lat])

  console.log(
    '%c positionArray ',
    'background: green; color: white',
    positionArray
  )

  return (
    <MapContainer center={[lat, lng]} zoom={8}>
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[lat, lng]} icon={issIcon}>
        <Popup>
          International <br />
          Space Station
        </Popup>
      </Marker>
      {positionArray.map((position) => (
        <Marker key={position[0]} position={position} icon={dotIcon}>
          <Popup>
            <div>
              <p>marker</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default TrackMap
