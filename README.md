# Breakable

This project aims to assist chaos engineers in thinking about creating robust UI experiences that can survive massive service outages successfully. The project intends to focus on modular architecture that pretends to be informed by microservices. It also intends to build out robust redundancy with service workers and fallbacks for critical routes.

## Lesson Plan

1.  Break 3rd party tool - just using the browser.
2.  Break UI using attack on node service of production build keep service running
3.  Break UI using attack on node service of production build and bring down api

## Chapter 1 - Why is UI important and why may it be overlooked

### Where we came from, where we are going...

In the beginning we had [spacejam](https://www.warnerbros.com/archive/spacejam/movie/jam.htm) and [Bob Dole](http://www.dolekemp96.org/). These were sites that are essentially devoid of any javascript and relied on html sent from a server. The only state on a website was contained within form input fields. Compariatively, the state management concerns and the associated complexity of javascript applications today have barely any respemblance to the website experiences of yesteryear. The introduction of single page applications (SPAs) as well as dramatic increase in the capabilities of the browser mean that the state management concerns for a user session have moved in a large part, from the server to the client.
A recent example would be the introduction of [codesandbox](https://twitter.com/CompuIves/status/1045393192114409473) which allows developers to write, share and execute code on the cloud.

### Whats next?

* [WebAssembly](https://webassembly.org/)
    * A target to things.
* [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [HTTP/2.0](https://en.wikipedia.org/wiki/HTTP/2)
* [Micro Frameworks](https://speakerdeck.com/naltatis/micro-frontends-building-a-modern-webapp-with-multiple-teams)

## Chapter 2 - User Experiences

###Primary and Secondary Concerns in a View.

Users always have a motive for loading a page in their browser. In thinking about creating a robust UI, it's important to seperate that motive from supplimentary information that, though useful to them, is not imperitive to the outcome they seek.




https://serviceworke.rs/


UI has moved a lot in the past 5 years, the advent of single page apps has shifted a lot of state concerns to the client. In addition, the move toward progressive web app - including the shift to service workers and the possibilities that web assembly provides will increase the complexity and scope of the concerns faced by the front end.

### Step 1 - Get up and running

### Step 2 - Examining critical paths in UI design

UI views consist of data that is critical to the users goals on a particular page and supplimentary information. When thinking about the resiliency of a user interface, its important to distinguish what is critical (potentially requiring fallbacks) and what is auxiliary (information that can potentially be omitted from the view). Deciding what is critical and what is auxiliary should be discussed with product management and can fit into end to end testing plans.

# Netflix Targeted Content
![Targeted Content](https://github.com/higgyCodes/breakable/raw/master/src/public/targeted_content.png "Targeted Content from Netflix UI")

# 



### Step 3 - Buildling Fallbacks for Critical Paths.

Discuss error boundaries. [React.js](https://reactjs.org/docs/error-boundaries.html), [Ember.js](https://guides.emberjs.com/release/routing/loading-and-error-substates/#toc_error-substates) and [Vue.js](https://vuejs.org/v2/api/#errorCaptured) and [Anglular](https://angular.io/api/core/ErrorHandler) all have error handling methods to handle catching errors and providing alternative state.


## Author

Patrick Higgins

## License

This project is licensed under the MIT License

## Acknowledgements

* Thanks to [Tammy](https://twitter.com/tammybutow), [Ana](https://twitter.com/Ana_M_Medina/) and [Kye](https://twitter.com/tkh44)
* Thanks to [Brian Holt](https://twitter.com/holtbt) for inspiration on the tutorial structure and acting as a sounding board regarding chaos engineering and UI
