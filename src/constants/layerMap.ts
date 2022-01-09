const DEFAULT_LAYER_NAME = 'Street'

const tileLayers = [
  {
    name: DEFAULT_LAYER_NAME,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    },
  },
  {
    name: 'OSM Piano',
    url: 'https://{s}.piano.tiles.quaidorsay.fr/fr/{z}/{x}/{y}.png',
    options: {
      attribution:
        'Tiles <a href="https://github.com/tilery/pianoforte">PianoFr</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 20,
    },
  },
  {
    name: 'Hike Bike',
    url: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
    options: {
      attribution:
        'Tiles <a href="https://github.com/tilery/pianoforte">PianoFr</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 20,
    },
  },
  {
    name: 'Topo',
    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
    options: {
      attribution:
        'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
      minZoom: 0,
      maxZoom: 20,
    },
  },
  {
    name: 'Copy',
    url: 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
    options: {
      attribution:
        'Tiles <a href="https://github.com/tilery/pianoforte">PianoFr</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 20,
    },
  },
  {
    name: 'Satellite',
    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
    options: {
      maxZoom: 20,
      attribution:
        'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
    },
  },
]

export default tileLayers
export { DEFAULT_LAYER_NAME }
