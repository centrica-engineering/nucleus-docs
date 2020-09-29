---
description: Ensuring that no one is left out.
---

# Accessibility

Nucleus cares deeply about inclusivity. To help everyone, we aim to understand the impact each and every decision we make.

## Guidance

Accessibility is a fundamental foundation of Nucleus.

In addition to [accessibility principles](https://docs.britishgas.design/getting-started/principles#accessibility-principles) and starting points to accommodate [different types of barriers](#types-of-barriers), we've made sure our [components](https://docs.britishgas.design/components) integrate [WCAG 2.1](https://www.w3.org/TR/WCAG21) Level AA practices.

The following guidance has been provided by our accessibility partner DAC.

### Colour

A high level of colour contrast assists people with sight loss, including colour blindness, as well as people with cognitive disabilities.

We follow two primary rules of accessibility related to colour.

* We never use colour as the only means of providing information or requesting an action.
* The combinations of text and their background colours do not fall below the [WCAG recommended threshold ratio](https://www.w3.org/TR/WCAG21/#contrast-minimum) of 4.5:1 for standard or small text and 3:1 for larger text.

There are a number of tools that we've listed in our [Accessibility Tools](#accessibility-tools) section which may help.

### Audio and video

* Audio and video content including important speech or sound must have a text equivalent.
* Captions are provided for all pre-recorded audio content in synchronised media, except when the media is a media alternative for text and is clearly labelled as such.
* Audio and/or video embedded in an application (including audio that is part of a video or multimedia file) must play for no more than 3 seconds before pausing or plays only when the user chooses.
* When pressing play a screen reader user must be able to use a single button press to pause it again.
* Disabled users have access to clearly labelled play and pause controls for the audio/video player.

### Forms

* All form fields are labelled or, where it is not possible to label a form, a descriptive aria-label attribute is used.
* Where errors occur on a form, the user is informed as to which fields need attention and why.
* Provide informative error messages and a means of navigating away from an error message back to useful information.

### Gestures

* Gestures must be intuitive and consistent.
* The solution will allow use of familiar gesture controls such as finger swipe, taps, zoom pinch/pull.
* Do not insert functions that can only be managed via gestures (such as swiping motion).
* Always add a button/link so that users who have limited dexterity can tap a button to navigate.

### Images

* All images must have a valid alt attribute values.
* Link images describe the destination page.
* Button images have an alt attribute that describes the function of the button.
* Images used for decorative and spacing purposes rather than providing essential, contextual and functional guidance must have a null alt attribute (`aria-hidden=true` or `alt=''`) to hide it from screen readers.

### Links

* The solution must clearly show via text and label where each link will take the customer.
* Where a link to content that differs in file format is presented, the format and size will also be presented in the link title.
* Image links and buttons have an alt text that describes their purpose.
* All links are visible or become visible when they receive focus.

### Motion

* Images do not flicker at a rate that may trigger seizures in susceptible individuals.
* Content should not flash more than 3 times in any 1 second period.
* Movement on the page is limited to 5 seconds.
* If movement takes longer than 5 seconds, use a control on the page that stops moving, blinking or auto updating content.

### Navigation

* Ensure that material that is central to the meaning of the page precedes material that is not.
* Divide pages into usable but limited size portions.
* Create a logical order through links, form controls and objects.
* Users will be able to use external hardware to navigate the solution, such as Bluetooth keyboards.
* All aspects of the navigation can be accessed using keyboard-only control and screen readers.

## Types of barriers

Inclusivity and accessibility are fundamental. No one should be left out. Ever.

### Physical barriers

When designing experiences for users who have physical disabilities which impact their mobility, it is important to acknowledge the following:

* Provide shortcuts.
* Make large clickable actions.
* Give form fields space.
* Design with mobile and touch screen in mind.
* Design for keyboard or speech only use.

### Cognitive development

When designing experiences for users who have cognitive disabilities, it is important to acknowledge the following:

* Reading age may be lower.
* Busy page layout can be confusing (Keep it simple!).
* Ambiguous labels and icons can be confusing.
* Users may be easily distracted by moving animation.
* Short term memory may be affected.

### Hearing loss

When designing experiences for users who have hearing loss, it is important to acknowledge the following:

* Provide synchronised captions for all video content.
* Do not use audio features.
* Provide transcripts for all audio content.
* Deaf users require captions if the video does not make sense when the sound is turned off.

### Sight loss

When designing experiences for users who have sight loss, it is important to acknowledge the following:

* Contrast between text and the background may not be sufficient (W3C ratio 4.5:1).
* Text may not be large enough to read so would need to resize or zoom into content.
* Do not cause content to update elsewhere on screen after selecting an item.

Screen readers are used to translate written text into speech:

* All non-text elements (images, multimedia) require a text alternative.
* Visual structure must be represented in a logical order, use headings.
* Navigation must be obvious to users (scrolling content confusing).

### Permanent vs. temporary

Some barriers are permanent, some temporary. Suffering from an injury or illness can limit the use of a limb. Not being fluent in a language lowers our reading age. We might want to watch a video with its sound muted but not have any headphones at hand.

In fact, it's likely that all of us experience these barriers at some point in our lives. Whether temporary or permanent, we don't need to think that our abilities are any less than those of others. It's simply a different approach to getting on and taking action in our lives.

## Accessibility Tools

A collection of accessibility tools.

### SortSite

[https://www.powermapper.com/products/desktop/try/](https://www.powermapper.com/products/desktop/try/)  
A website accessibility checking tool.

### Total Validator

[https://www.totalvalidator.com/](https://www.totalvalidator.com/)  
Total Validator will validate your HTML and CSS, check that pages are accessible, run a spell check, and check for broken links. Performing a one-click validation of your website.

### Web Accessibility Toolbar

[https://developer.paciellogroup.com/resources/wat/](https://developer.paciellogroup.com/resources/wat/)  
The Web Accessibility Toolbar (WAT) has been developed to aid manual examination of web pages for a variety of aspects of accessibility.

### WAVE Web Accessibility Evaluation Tool

[http://wave.webaim.org/](http://wave.webaim.org/)  
Web accessibility evaluation tool.

### Colour Contrast Analyser

[https://developer.paciellogroup.com/resources/contrastanalyser/](https://developer.paciellogroup.com/resources/contrastanalyser/)  
The Colour Contrast Analyser (CCA) helps you determine the legibility of text and the contrast of visual elements, such as graphical controls and visual indicators.

### Sim Daltonism

[https://michelf.ca/projects/sim-daltonism/](https://michelf.ca/projects/sim-daltonism/)  
Sim Daltonism lets you visualise colours as they are perceived with various types of colour blindness. Use the camera on your iOS device, or use the Mac app to filter a region of the screen. Sim Daltonism is open source.

### Colour Contrast Analyser for Sketch

[https://github.com/getflourish/Sketch-Color-Contrast-Analyser](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)  
This plugin will allow you to test the accessibility of your designs for users who are colorblind, while you work directly within Sketch. ‘Color Contrast Analyzer’ gives you the ability to calculate the color contrast ratio of two layers (or a single layer against the artboard), and evaluate that value against WCAG standards.

### Using another tool?

If you use any other tools that you think we should include, please get in contact with the Nucleus Design System Team.
