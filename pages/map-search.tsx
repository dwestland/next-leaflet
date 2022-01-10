/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function HomePage() {
  const MapSearch = dynamic(() => import('@/components/MapSearch'), {
    ssr: false,
  })
  return (
    <div>
      <h1>Map Search</h1>
      <MapSearch />
      <Nav />
    </div>
  )
}

export default HomePage
