/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'

function ClickForLatLong() {
  const ClickMap = dynamic(() => import('@/components/ClickMap'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Click on Map for Lat / Long</h1>
      <ClickMap />
    </div>
  )
}

export default ClickForLatLong
