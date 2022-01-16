/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function TrackObject() {
  // function TrackObject({ data }) {
  const TrackMapStatic = dynamic(() => import('@/components/TrackMapStatic'), {
    ssr: false,
  })
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)

  const url = 'http://api.open-notify.org/iss-now.json'

  const fetchPosition = async () => {
    const res = await fetch(url, {})
    const fetchedData = await res.json()

    const newLat = fetchedData.iss_position.latitude
    const newLng = fetchedData.iss_position.longitude

    setLat(newLat)
    setLng(newLng)

    return null
  }

  useEffect(() => {
    const interval = setInterval(() => fetchPosition(), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Track Object - Static</h1>
      <p>
        International Space Station: Latitude {lat}&deg; Longitude {lng}&deg;
      </p>
      <div className="leaflet-container">
        <TrackMapStatic lat={lat} lng={lng} />
      </div>
      <Nav />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://api.open-notify.org/iss-now.json')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default TrackObject
