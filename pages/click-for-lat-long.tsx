/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function ClickForLatLong() {
  const ClickMap = dynamic(() => import('@/components/ClickMap'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Click on Map for Lat / Long</h1>
      <ClickMap />
      <Nav />
    </div>
  )
}

export default ClickForLatLong
