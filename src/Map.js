import React, {Component} from 'react';
import Mapbox from './Mapbox';
import GoogleMaps from './GoogleMaps';
import ErrorBoundary from './ErrorBoundary';

export default class Map extends Component {
  render() {
    console.log('does this work', this.props.setGeocodePoll);
    return (
      <ErrorBoundary
        fallback={
          <GoogleMaps
            getTweetIds={this.props.getTweetIds}
            getTweetDetails={this.props.getTweetDetails}
            setGeocodePoll={this.props.setGeocodePoll}
            removeGeocodePoll={this.props.removeGeocodePoll}
            getPlace={this.props.getPlace}
            getNewBounds={this.props.getNewBounds}
          />
        }>
        <Mapbox
          getTweetIds={this.props.getTweetIds}
          getTweetDetails={this.props.getTweetDetails}
          setGeocodePoll={this.props.setGeocodePoll}
          removeGeocodePoll={this.props.removeGeocodePoll}
          getPlace={this.props.getPlace}
          getNewBounds={this.props.getNewBounds}
        />
      </ErrorBoundary>
    );
  }
}
