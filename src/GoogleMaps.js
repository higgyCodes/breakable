import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class MapContainer extends Component {
  componentDidMount() {
    const {placesContainer, getTweetIds, getTweetDetails} = this.props;
    placesContainer.setGeocodePoll(getTweetIds, getTweetDetails);
  }

  render() {
    const {getPlace} = this.props.placesContainer.selectors;
    const {getTweetIds, getTweetDetails} = this.props;

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{width: '100%', height: '60vh', position: 'relative'}}>
        {getTweetIds()
          .filter(id => getPlace(id))
          .map(id => {
            const location = getPlace(id).location;
            const userName = getTweetDetails(id).user.name;
            return (
              <Marker
                title={userName}
                name={userName}
                position={{lat: location.lat, lng: -location.lng}}
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

//<Marker
//    title={'The marker`s title will appear as a tooltip.'}
//    name={'SOMA'}
//    position={{lat: 37.778519, lng: -122.405640}} />
