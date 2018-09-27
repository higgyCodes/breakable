import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapBoxMaps from './MapBoxMaps';
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

const MapWrapper = GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer);

export default class ErrorWorking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    // Display fallback UI
    console.log('does this work', error, info);
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
  }

  render() {
    //return <MapBoxMaps />;
    return <MapWrapper {...this.props} />;
  }
}
