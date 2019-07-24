# Standards


Accessibility needs to be build in. In addition to [accessibility principles](https://centrica.frontify.com/r/lUEdXVvtfufWGAcMq883LHr3USn390x6etw4LsVD3k4,) and starting points to work around [different types of barriers](https://centrica.frontify.com/r/BM51HZ6bchTNLIpsCA6o1TzzBnXkkBc0kC19eMPOT64,), we've made sure [Nucleus components](https://centrica.frontify.com/r/pEPpUugQu0a5Hn0D3K7ytMHXb1JUxWhfHBWe4EOZGxo,) integrate  [WCAG 2.1](https://www.w3.org/TR/WCAG21) Level AA practices.

Within this section, we've covered accessibility standards on elements and components that are currently not covered within Nucleus, but which have a significant impact on accessibility.

## Audio and video

* All audio and video content including important speech or sound must have a text equivalent
* Captions are provided for all pre-recorded audio content in synchronised media, except when the media is a media alternative for text and is clearly labelled as such
* Audio and/or video embedded in an application (including audio that is part of a video or multimedia file) must play for no more than 3 seconds before pausing or plays only when the user chooses
* When pressing play a screen reader user must be able to use a single button press to pause it again
* Disabled users have access to clearly labelled play and pause controls for the audio/video player

## Forms

* All form fields are labelled or, where it is not possible to label a form, a descriptive aria-label attribute is used
* Where errors occur on a form, the user is informed as to which fields need attention and why
* Provide informative error messages and a means of navigating away from an error message back to useful information

## Gestures

* Gestures must be intuitive and consistent
* The solution will allow use of familiar gesture controls such as finger swipe, taps, zoom pinch/pull
* Do not insert functions that can only be managed via gestures (such as swiping motion)
* Always add a button/link so that users who have limited dexterity can tap a button to navigate

## Images

* All images must have a valid alt attribute values
* Link images describe the destination page
* Button images have an alt attribute that describes the function of the button
* Images used for decorative and spacing purposes rather than providing essential, contextual and functional guidance must have a null alt attribute (`aria-hidden=true` or `alt=''`) to hide it from screen readers

## Links

* The solution must clearly show via text and label where each link will take the customer
* Where a link to content that differs in file format is presented, the format and size will also be presented in the link title
* Image links and buttons have an alt text that describes their purpose
* All links are visible or become visible when they receive focus

## Motion

* Images do not flicker at a rate that may trigger seizures in susceptible individuals
* Content should not flash more than 3 times in any 1 second period
* Movement on the page is limited to 5 seconds
* If movement takes longer than 5 seconds, use a control on the page that stops moving, blinking or auto updating content

## Navigation

* Ensure that material that is central to the meaning of the page precedes material that is not
* Divide pages into usable but limited size portions
* Create a logical order through links, form controls and objects
* Users will be able to use external hardware to navigate the solution, such as Bluetooth keyboards
* All aspects of the navigation can be accessed using keyboard-only control and screen readers
