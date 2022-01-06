/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

function HomePage() {
  const Map = dynamic(() => import('@/components/Map'), { ssr: false })
  return (
    <div>
      <h1>Home Page</h1>
      <Map />
      <br />
      <Link href="../click-for-lat-long">
        <a>Click on Map for Lat / Long</a>
      </Link>
    </div>
  )
}

export default HomePage
