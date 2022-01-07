/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'

function TrackObject() {
  const TrackMap = dynamic(() => import('@/components/TrackMap'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Track Object</h1>
      <TrackMap />
    </div>
  )
}

export default TrackObject
