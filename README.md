# React Portfolio

URL of Deployed Application: 
https://marcos-cmd.herokuapp.com

## Description
This portfolio was created using Create-React-App. The styling use bootstrap react. The pages are linked together using React Router. This project was a fun way to learn more about how React works. 

## Code Highlights

### Using Props to Pass Information between Components
I wanted to create cards that highlighted my work on the portfolio page. I created the carousel component to store all of the cards. I also stored all of the cards' information inside of this component. This made it easier to add additional cards as I created more projects to highlight. The cards themselves are comprised of both the Card and CardInfo components. Using props allowed me to pass the information to fill the cards to both of these components from the Carousel component. 

### Creating Interaction
The cards display a screenshot of the projects they represent. The Carousel Component stores a function to handleCardClick when a project is selected. The click opens a drawer below the screenshot allowing the user to click a button to see the code on github, or see the deployed application. 
