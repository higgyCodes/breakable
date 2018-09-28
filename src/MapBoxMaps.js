import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';
import React, {Component} from 'react';

const Map = ReactMapboxGl({
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY,
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});
export default class MapContainer extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          width: '400px',
          height: '400px',
        }}>
        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    );
  }
}
