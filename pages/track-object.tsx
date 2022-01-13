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
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const url = 'http://api.open-notify.org/iss-now.json'
  const positionArray = []

  useEffect(() => {
    setLat(data.iss_position.latitude)
    setLng(data.iss_position.longitude)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => fetchPosition(), 1000)
    // destroy interval on unmount
    return () => clearInterval(interval)
  }, [])

  // const addToPositionArray = async () => {
  //   positionArray.push([lat, lng])
  //   return null
  // }

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
    await positionArray.push([lat, lng])

    await console.log('positionArray', positionArray)

    setLat(fetchedData.iss_position.latitude)
    setLng(fetchedData.iss_position.longitude)

    return null

    // return res.json()
  }

  return (
    <div>
      <h1>Track Object{positionArray[0]}</h1>
      <p>
        International Space Station: Latitude {lat}&deg; Longitude {lng}&deg;
      </p>
      <div className="leaflet-container">
        <TrackMap lat={lat} lng={lng} positionArray={positionArray} />
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
