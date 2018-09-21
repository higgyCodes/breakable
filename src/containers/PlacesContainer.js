import {Container} from 'unstated';
import axios from 'axios';

export default class PlacesContainer extends Container {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      places: {},
      placeIds: [],
    };
    this.selectors = {
      getPlaceIds: () => this.state.tweetIds || [],
      getPlace: tweetId => this.state.tweets[tweetId] || {},
    };
  }

  retrievePlaces(mapLocations) {
    this.setState({isLoading: true});

    return axios
      .post('http://localhost:3000/places', {
        locations: mapLocations,
      })
      .then(res => {
        let places = {};
        let placeIds = [];
        res.data.statuses.forEach(place => {
          places[place.id] = tweet;
          placeIds.push(place.id);
        });
        this.setState({places, placeIds, isLoading: false});
      });
  }
}
