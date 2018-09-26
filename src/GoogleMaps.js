import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class MapContainer extends Component {
  componentDidMount() {
    const {placesContainer, getTweetIds, getTweetDetails} = this.props;
    placesContainer.setGeocodePoll(getTweetIds, getTweetDetails);
  }

  componentWillUnmount() {
    this.props.placesContainer.removeGeocodePoll();
  }

  render() {
    const {getPlace, getNewBounds} = this.props.placesContainer.selectors;
    const {getTweetIds, getTweetDetails} = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        center={getNewBounds().location}
        onReady={this.handleReady}
        onError={this.tester}
        style={{width: '100%', height: '60vh', position: 'relative'}}>
        {getTweetIds()
          .filter(id => (getPlace(id) || {}).location)
          .map(id => {
            // location has been sometimes undefined
            const location = getPlace(id).location;
            const userName = getTweetDetails(id).user.name;

            return (
              <Marker
                title={userName}
                name={userName}
                position={{lat: location.lat, lng: location.lng}}
              />
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer);
