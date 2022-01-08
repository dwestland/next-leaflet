import React, { useState } from 'react'
import { MapContainer, MapConsumer, TileLayer } from 'react-leaflet'

const ClickMap = () => {
  const [clickLat, setClickLat] = useState(0)
  const [clickLng, setClickLng] = useState(0)

  return (
    <>
      <p>
        {clickLat.toFixed(4)}&#176; {clickLng.toFixed(4)}&#176;
      </p>

      <MapContainer center={[33.9765, -118.4483]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[33.97, -118.44]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}

        <MapConsumer>
          {(map) => {
            console.log('map center:', map.getCenter())
            // TODO: Add type::
            map.on('click', (e: any) => {
              console.log('e:', e)
              const { lat, lng } = e.latlng

              setClickLat(lat)
              setClickLng(lng)
              console.log('clickLat:', clickLat, 'clickLng:', clickLng)
            })
            return null
          }}
        </MapConsumer>
      </MapContainer>
    </>
  )
}

export default ClickMap
