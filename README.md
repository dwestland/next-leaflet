# next-leaflet

## Notes from creating this repository

Installed react-leaflet-markercluster for MarkerCluster for Group of Markers

**ESRI Search**

Installed esri-leaflet-geocoder esir-leaflet

**Latitude and Longitude Distance**

One degree Latitude is about 69 miles or 364,000 feet at the equator.

Decimals:

- 0.1 = about 7 miles or 36,400 feet
- 0.01 = about 3,640 feet
- 0.01 = about 3,640 feet
- 0.001 = about 364 feet
- 0.0001 = about 36 feet

**Start dev:**

```
npm run dev
```

Install dependencies:

```
npm i leaflet react-leaflet
```

Install dev dependencies:

```
npm i -D @types/leaflet
```

Add a `pages/_document.tsx` file and include the following in the `<head>` :

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""
/>
```

Add CSS styles

```css
.leaflet-container {
  margin: auto;
  width: 600px;
  height: 600px;
}
```

Add Map component

```js
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => (
  <MapContainer center={[3.9765, -118.4483]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[3.9765, -118.4483]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

export default Map
```

Use a dynamic Map import for SSR

```js
import React from 'react'
import dynamic from 'next/dynamic'

function HomePage() {
  const Map = dynamic(() => import('../src/components/Map'), { ssr: false })
  return (
    <div>
      <h1>Home Page</h1>
      <Map />
    </div>
  )
}

export default HomePage
```
