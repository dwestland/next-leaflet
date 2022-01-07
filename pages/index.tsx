/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'

function HomePage() {
  const Map = dynamic(() => import('@/components/Map'), { ssr: false })
  return (
    <div>
      <h1>Home Page</h1>
      <Map />
      <Nav />
    </div>
  )
}

export default HomePage
