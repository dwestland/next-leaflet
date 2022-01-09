/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function LayerMap() {
  const Map = dynamic(() => import('@/components/layerMap'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Layer layerMap</h1>
      <Map />
      <Nav />
    </div>
  )
}

export default LayerMap
