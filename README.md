## Dulce Cafe App
This is a simple web app for displaying information about soccer leagues, teams, and players.

## Project Objectives
To create a cafe Mexican styke website
Users should be able to look at choose from the menu
Once the the user has put their items at the menu, they can proceed to the order page, where the order should process

## Project Structure

- image: this folder contains images used in the cafe
- index.html: this is the home page of cafe, should display a slideshow of supposed images of the cafe and display a message
- menu.html: the page should display the small menu items provided by the cafe.
- about.html: the about page displays contact information, availability and a form to submit questions.
- order.html: Once the user finished choosing from the menu, it should take them to the order page where it will be processed.
- style.css: css page used to format the pages and style them through color, fonts, etc.
- server.js -  meant to be a back-end service for the cafe, managing both the menu items and a shopping cart system for users.
- database.js -  sets up the foundational database and models for the application.
- database.sqlite
- 'database.sqlite'
- package-lock.json
- package.json
  

## Documented Issues
-information on the menu isn’t being displayed, this could potentially be due to the fact that there is an incorrect endpoint path. It seems that the menu.html file doesn’t correctly request the information from the database.
-A possible solution to this it to inspect network requests and responses
An application called postman can potentially help with that interacting with the endpoint directly. This application helps determine whether the issue comes from server or network


## Tech Stack
-Front-end
  - HTML
  - CSS
  - JavaScript
-Back-end
  - Node.js
  - Express.js
  - Sequelize
- Database
  -SQLite     

## To clone the repository
- git clone https://github.com/SukeerLedezma/Flask-Soccer-App.git

## Sources for information
https://eldiariony.com/2020/10/18/para-empezar-a-disfrutar-conoce-la-larga-tradicion-del-pan-dulce-mexicano/

https://nyps3j2011.blogspot.com/2022/02/mexican-coffee-mugs.html

https://www.pinterest.com/pin/518406607090093256/

## Author
Sukeer Ledezma
