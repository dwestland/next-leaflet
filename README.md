# next-leaflet

**Start dev environment:**

```
npm run dev
```

## Notes from creating repository

**Leaflet**

Add to head in index.html or in Next.js, add to head in pages/\_document.tsx:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""
/>
```

Install dependencies:

```
npm i leaflet react-leaflet
```

For TypeScript, install dev dependency:

```
npm i -D @types/leaflet
```

**Create page. Use a dynamic Map import for Next.js SSR**

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

**Add Map component**

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

Add CSS styles

```css
.leaflet-container {
  margin: auto;
  width: 600px;
  height: 600px;
}
```

Latitude and Longitude parameters can be an object:

```
{
  {
    lat: 33.9765,
    lng: -118.4483
  }
}
```

or an array:

```
{
  [33.9765, -118.4483]
}
```

**ESRI Search Feature**

Add to head in index.html or in Next.js, add to head in pages/\_document.tsx:

```
<link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css" />
```

Install dependencies:

```
npm i esir-leaflet esri-leaflet-geocoder
```

**Mark Clusters Feature**

```
react-leaflet-markercluster
```

**Latitude and Longitude Distance Info**

One degree Latitude is about 69 miles or 364,000 feet at the equator.

Decimals:

- 0.1 = about 7 miles or 36,400 feet
- 0.01 = about 3,640 feet
- 0.01 = about 3,640 feet
- 0.001 = about 364 feet
- 0.0001 = about 36 feet
