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

  useEffect(() => {
    const interval = setInterval(() => setReload(true), 1000 * 60 * 15)
    // destroy interval on unmount
    return () => clearInterval(interval)
  })

  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)

  console.log('data.iss_position.latitude', data.iss_position.latitude)
  console.log('data.iss_position.longitude', data.iss_position.longitude)

  useEffect(() => {
    setLat(data.iss_position.latitude)
    setLng(data.iss_position.longitude)
  }, [])

  return (
    <div>
      <h1>Track Object</h1>
      <TrackMap lat={lat} lng={lng} />
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
