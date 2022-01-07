import React from 'react'
import Link from 'next/link'

const Nav = () => {
  console.log('Nav')
  return (
    <div>
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/click-for-lat-long">
        <a>Click on Map for Lat / Long</a>
      </Link>
      <br />
      <Link href="/track-object">
        <a>Track Object</a>
      </Link>
      <br />
      <Link href="/layer-map">
        <a>Layer Map</a>
      </Link>
    </div>
  )
}

export default Nav
