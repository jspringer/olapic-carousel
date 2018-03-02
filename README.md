## Carousel Task

#### Task
Create a simple front-end display of UGC pulled directly from the Olapic API, and incorporate a carousel feature to make the content scrollable.

#### Conditions
1. Create a scrollable image carousel with the following specs:
- Left and right navigation buttons (met)
- 6 photos showing at a given time. (met)
2. Display the photo objects from Olapic API response into the carousel (met)
3. Explain your development process. (Ex. Your method of retrieving images from the Olapic API, how you implemented the carousel, etc.) (see below)

#### Steps: 
1. Reviewed instructions.
2. Visited and inspected (DevTools) example pages listed.
3. Reviewed [API documentation](http://www.photorank.me/api.html). 
4. In Postman, GET https://photorankapi-a.akamaihd.net?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2 for Customer ID and other information about the account.
5. Considered options for handling the API. Decided jQuery is the simplest solution ($.ajax()). 
6. Created files based on names given in documentation, organized into usual directories. 
7. While investigating, found documentation on Olapic's website for setting up a carousel using Owl and used that as a model for my solution. I assume this may have been part of the challenge, finding existing documentation to speed up the process of handling the task rather than starting from scratch and losing productivity time and possibly introducing bugs. 
8. Edited the [script.js](js/script.js) code in several ways: 
- Changed vars to consts and lets (ES6+ style)
- Added let to variable declaration in the for loop on line 17
- Changed x to i in for loop, personal preference (think of i as short for index)
- Eliminated the mediaItem variable declaration, though I understand it may have been set up that way to make it a bit more clear to someone else reviewing the code what is going on (this could be mentioned in a comment)
- Decided to use .normal images rather than .mobile on line 18. 
- Altered some of Owl's carousel settings (set items to 6, changed navText to use Font Awesome arrows, autoplay to false, the value of items under responsive)
9. In [index.html](index.html), updated the link to the jQuery used to the most recent version and added Font Awesome for arrows.
10. Updated [style.css](css/style.css), particularly for handling the arrows. 

#### Potential issue: 
Client's example carousel was slightly different than the conditions. Mainly, there is a selected photo shown above the carousel. Would check with client to see if they actually want that as well. 

**[View](http://jasonspringer.me/other/olapic-carousel/)**