import React from 'react'
import Link from 'next/link'

const Nav = () => (
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
    <Link href="/track-object-static">
      <a>Track Object - Static</a>
    </Link>
    <br />
    <Link href="/layer-map">
      <a>Layer Map</a>
    </Link>

    <br />
    <Link href="/group-of-markers-map">
      <a>Group of Markers Map with Marker Clustering</a>
    </Link>

    <br />
    <Link href="/map-search">
      <a>Map Search</a>
    </Link>
  </div>
)

export default Nav
