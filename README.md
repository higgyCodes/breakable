# Breakable

This project aims to assist chaos engineers in thinking about creating robust UI experiences that can survive massive service outages successfully. The project intends to focus on modular architecture that pretends to be informed by microservices. It also intends to build out robust redundancy with service workers and fallbacks for critical routes.

## Lesson Plan

1.  Break 3rd party tool - using error boundaries.
2.  Make NY Times fail, for real this time.
3.  Bring down the server, keep the browser running

## Chapter 1 - Why is UI important and why may it be overlooked

### Where we came from, where we are going...

In the beginning we had [spacejam](https://www.warnerbros.com/archive/spacejam/movie/jam.htm) and [Bob Dole](http://www.dolekemp96.org/). These were sites that are essentially devoid of any javascript and relied on html sent from a server. The only state on a website was contained within form input fields. Compariatively, the state management concerns and the associated complexity of javascript applications today have barely any respemblance to the website experiences of yesteryear. The introduction of single page applications (SPAs) as well as dramatic increase in the capabilities of the browser mean that the state management concerns for a user session have moved in a large part, from the server to the client.
A recent example would be the introduction of [codesandbox](https://twitter.com/CompuIves/status/1045393192114409473) which allows developers to write, share and execute code on the cloud.

### Whats happening?

* [WebAssembly (WASM)](https://webassembly.org/)
  * [A new type of code](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts) that can be run in modern browsers.
  * A compilation target for languages languages such as C, C++ and Rust.
  * Highly perfomant and great for 3D games, Virtual and Augmented Reality, computer vision, image/video editing
* [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
  * A control mechanism for caching data and redirecting network requests
  * [serviceworke.rs](https://serviceworke.rs)
* [HTTP/2.0](https://en.wikipedia.org/wiki/HTTP/2)
  * Improved Latency
    * Data compression for http headers
  * Server Push
  * Multiplexing multiple requests over TCP connectionn
* [Micro Frameworks](https://speakerdeck.com/naltatis/micro-frontends-building-a-modern-webapp-with-multiple-teams)

## Chapter 2 - User Experiences

### Primary and Secondary Concerns in a View.

Users always have a motive for loading a page in their browser. In thinking about creating a robust UI, it's important to seperate that motive from supplimentary information that, though useful to them, is not imperitive to the outcome they seek. Some infomation can be ommitted if unavailable or treated differently. For critical paths where omission is obviously not a possibility, suggesting alternative ways for the user to accomplish their objective may be possible or some apology and admission of failure.

#### Netflix Targeted Content

![Netflix Targeted Content](https://raw.githubusercontent.com/higgyCodes/breakable/master/public/targeted_content.png 'Targeted Content from Netflix UI')

#### Netflix Generic Content

![Netflix Generic Content](https://raw.githubusercontent.com/higgyCodes/breakable/master/public/generic_content.png 'Generic Content from Netflix UI')

#### A Healthy Experience

![Twitter Healthy Card](https://raw.githubusercontent.com/higgyCodes/breakable/master/public/twitter_card.png 'A Healthy Experience')

#### A Bad Degredation Experience

![Twitter Bad Degredation](https://raw.githubusercontent.com/higgyCodes/breakable/master/public/bad_twitter_card.png 'A Bad Experience')

#### A Good Degredation In Context

![Twitter Feed](https://raw.githubusercontent.com/higgyCodes/breakable/master/public/twitter_feed.png 'A Good Degredation in Context')

## Chapter 3 - Buildling Fallbacks for Critical Paths

### Third-party Assets

If third party assets are being used on critical flows in the user interface, they should be consider potential weaknesses in the critical path of the application. In the event that these assets fail, the user will most likely attribute blame to your organization. Creating fallback redundencies for third-party assets may be a way to mitigate away these concerns.

### Error Boundaries

[React.js](https://reactjs.org/docs/error-boundaries.html), [Ember.js](https://guides.emberjs.com/release/routing/loading-and-error-substates/#toc_error-substates) and [Vue.js](https://vuejs.org/v2/api/#errorCaptured) and [Anglular](https://angular.io/api/core/ErrorHandler) all have error handling methods to handle catching errors and providing alternative state. Today we are going to throw some errors and see what happens!

## Chapter 4 - Service Workers.

* Has to be served over HTTPS, (also works in development)
* Normally abstracted away for development mode by default because of issues on reload
* The ability to [retrieve cached](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Registering_your_worker) index.html, javascript, css assets.
* The ability to create an [embedded fallback strategy](https://serviceworke.rs/strategy-embedded-fallback.html) if resources are unavailable
* The ability to [load balance](https://serviceworke.rs/load-balancer.html) based on server availability
* Go To [https://codecupcake.com/](https://codecupcake.com/)

### Chapter 5 - The Future.

* Application Level Failure Injection to experiment with UI in Production
  * The abilities to target specific clients gives us the ability to test real world scenarios with a higher degree of certainty.
* Building Robust UI in Development.

## Author

Patrick Higgins

## License

This project is licensed under the MIT License

## Acknowledgements

* Thanks to [Tammy](https://twitter.com/tammybutow), [Ana](https://twitter.com/Ana_M_Medina/) and [Kye](https://twitter.com/tkh44)
