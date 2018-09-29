# Breakable

This project aims to assist chaos engineers in thinking about creating robust UI experiences that can survive massive service outages successfully. The project intends to focus on modular architecture that pretends to be informed by microservices. It also intends to build out robust redundancy with service workers and fallbacks for critical routes.

## Lesson

1.  Break 3rd party tool - just using the browser.
2.  Break UI using attack on node service of production build keep service running
3.  Break UI using attack on node service of production build and bring down api

### Step 1 - Why is UI important - why may it be overlooked?

UI has moved a lot in the past 5 years, the advent of single page apps has shifted a lot of state concerns to the client. In addition, the move toward progressive web app - including the shift to service workers and the possibilities that web assembly provides will increase the complexity and scope of the concerns faced by the front end.

### Step 1 - Get up and running

### Step 2 - Examining critical paths in UI design

UI views consist of data that is critical to the users goals on a particular page and supplimentary information. When thinking about the resiliency of a user interface, its important to distinguish what is critical (potentially requiring fallbacks) and what is auxiliary (information that can potentially be omitted from the view). Deciding what is critical and what is auxiliary should be discussed with product management and can fit into end to end testing plans.

### Step 3 - Buildling Fallbacks for Critical Paths.

Discuss error boundaries. [React.js](https://reactjs.org/docs/error-boundaries.html), [Ember.js](https://guides.emberjs.com/release/routing/loading-and-error-substates/#toc_error-substates) and [Vue.js](https://vuejs.org/v2/api/#errorCaptured) all have error handling methods to handle catching errors and providing alternative state.

## Author

Patrick Higgins

## License

This project is licensed under the MIT License

## Acknowledgements

* Thanks to [Tammy](https://twitter.com/tammybutow), [Ana](https://twitter.com/Ana_M_Medina/) and [Kye](https://twitter.com/tkh44)
* Thanks to [Brian Holt](https://twitter.com/holtbt) for inspiration on the tutorial structure and acting as a sounding board regarding chaos engineering and UI
