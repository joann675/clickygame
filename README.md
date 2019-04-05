# Clicky Game

### Overview

Clicky Game is a a memory game with React.

The application renders different images to the screen. Each image listens for events.

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

Once the user's score is reset after an incorrect guess, the game restarts.

This application is published at https://joann675.github.io/clickygame/


### Technologies Used

React
Bootstrap
CSS
ES6

### Implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

App.js is the stateful component which maintains the list of flower cards, the order of these cards and a clicked flag, score, top score and current text to display.

App.js renders a Wrapper component which consists of a Navbar, Header and multiple FlowerCards.

App.js also contains the click function which is passed to the flowercard and the shuffle method to randomize the order of the images



