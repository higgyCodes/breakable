import {Container} from 'unstated';
import axios from 'axios';

export default class PlacesContainer extends Container {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      places: {},
      newPlace: {},
    };
    this.selectors = {
      getPlaceIds: () => this.state.tweetIds || [],
      getPlace: tweetId => this.state.places[tweetId],
      getNewBounds: tweetId => this.state.newPlace,
    };
  }

  setGeocodePoll(getTweetIds, getTweetDetails) {
    this.geocodePoll = setInterval(() => {
      const hasNoGeocode = getTweetIds().find(id => !this.state.places[id]);
      if (!hasNoGeocode) return;
      const locationCandidate = getTweetDetails(hasNoGeocode);

      this.retrieveNewGeocode(locationCandidate.user.location).then(
        ({data}) => {
          const result =
            (data.candidates.length && data.candidates[0].geometry) || {};

          this.setState({
            places: Object.assign(this.state.places, {
              [locationCandidate.id]: result,
            }),
            newPlace: result,
          });
        },
      );
    }, 10000);
  }

  removeGeocodePoll() {
    clearInterval(this.geocodePoll);
  }

  retrieveNewGeocode(mapLocation) {
    return axios.get(`http://localhost:3000/places?${mapLocation}`);
  }
}
