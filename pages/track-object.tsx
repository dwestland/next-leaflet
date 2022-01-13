/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

interface issPositionProps {
  cams: {}[]
}

function TrackObject({ data }) {
  // function TrackObject({ data }) {
  const TrackMap = dynamic(() => import('@/components/TrackMap'), {
    ssr: false,
  })
  const url = 'http://api.open-notify.org/iss-now.json'
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const pasitionArray = []

  useEffect(() => {
    setLat(data.iss_position.latitude)
    setLng(data.iss_position.longitude)
  }, [])

  console.log(
    '%c pasitionArray ',
    'background: red; color: white',
    pasitionArray
  )

  // let fetchData: {}

  const fetchPosition = async () => {
    const res = await fetch(url, {})
    const fetchedData = await res.json()

    await console.log('fetchedData', fetchedData)
    await console.log(
      'fetchedData.iss_position.latitude',
      fetchedData.iss_position.latitude
    )
    await console.log(
      'fetchedData.iss_position.longitude',
      fetchedData.iss_position.longitude
    )

    setLat(fetchedData.iss_position.latitude)
    setLng(fetchedData.iss_position.longitude)

    return null

    // return res.json()
  }

  useEffect(() => {
    const interval = setInterval(() => fetchPosition(), 1000)
    // destroy interval on unmount
    return () => clearInterval(interval)
  })

  console.log('data.iss_position.latitude', data.iss_position.latitude)
  console.log('data.iss_position.longitude', data.iss_position.longitude)

  return (
    <div>
      <h1>Track Object</h1>
      <p>
        International Space Station: Latitude {lat}&deg; Longitude {lng}&deg;
      </p>
      <div className="leaflet-container">
        <TrackMap lat={lat} lng={lng} />
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
