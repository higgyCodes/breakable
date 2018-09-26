import ReactMapboxGl, {Layer, Feature, Cluster, Marker} from 'react-mapbox-gl';
import React, {Component} from 'react';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_KEY,
});

const clusterMarker = coordinates => (
  <Marker coordinates={coordinates}>C</Marker>
);

export default class MapBox extends Component {
  componentDidMount() {
    const {placesContainer, getTweetIds, getTweetDetails} = this.props;
    placesContainer.setGeocodePoll(getTweetIds, getTweetDetails);
  }

  componentWillUnmount() {
    this.props.placesContainer.removeGeocodePoll();
  }

  handleError(error) {
    this.state.error = true;
  }

  render() {
    const {getPlace, getNewBounds} = this.props.placesContainer.selectors;
    const {getTweetIds, getTweetDetails} = this.props;
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{width: '100%', height: '60vh', position: 'relative'}}
        center={getNewBounds().location}
        onError={this.handleError}>
        <Cluster ClusterMarkerFactory={clusterMarker}>
          {getTweetIds()
            .filter(id => (getPlace(id) || {}).location)
            .map(id => {
              const location = getPlace(id).location;
              const userName = getTweetDetails(id).user.name;
              return (
                <Marker key={id} coordinates={[location.lat, location.long]}>
                  M
                </Marker>
              );
            })}
        </Cluster>
      </Map>
    );
  }
}
