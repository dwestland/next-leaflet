/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

const LayerMapPage = () => {
  const LayerMap = dynamic(() => import('@/components/LayerMap'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Layer Map</h1>
      <LayerMap />
      <Nav />
    </div>
  )
}

export default LayerMapPage
