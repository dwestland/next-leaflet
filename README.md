# next-leaflet

## Notes from creating this repository

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
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
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
