import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

//const clusterMarker = coordinates => (
//  <Marker coordinates={coordinates}>C</Marker>
//);

export default class MapBox extends Component {
  componentDidMount() {
    const {placesContainer, getTweetIds, getTweetDetails} = this.props;
    placesContainer.setGeocodePoll(getTweetIds, getTweetDetails);
  }

  componentWillUnmount() {
    this.props.placesContainer.removeGeocodePoll();
  }

  handleError(error) {
    console.log('did this work here');
  }

  render() {
    const {getPlace, getNewBounds} = this.props.placesContainer.selectors;
    const {getTweetIds, getTweetDetails} = this.props;
    return (
      <ReactMapGL
        width={500}
        height={400}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v8"
        error={this.handleError}
      />
    );
  }
}
