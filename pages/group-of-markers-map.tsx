/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function GroupOfMakersMap() {
  const GroupOfMarkersMap = dynamic(
    () => import('@/components/GroupOfMarkersMap'),
    { ssr: false }
  )
  return (
    <div>
      <h1>Group of Markers Map</h1>
      <GroupOfMarkersMap />
      <Nav />
    </div>
  )
}

export default GroupOfMakersMap
