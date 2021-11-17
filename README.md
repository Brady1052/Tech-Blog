# Tech-Blog

Tech Blog
Description
GIVEN a CMS-style blog site

WHEN I visit the site for the first time

THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option

THEN I am taken to the homepage

WHEN I click on any other links in the navigation

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in

THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation

THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post

THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post

THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard

THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

WHEN I am idle on the site for more than a set time

THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

The following is a GIF of the app in use:
/Users/bradybuchholz/Desktop/Code/Tech-Blog/assets/14-mvc-homework-demo-01.gif

Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
Installation
You’ll need to use the express-handlebars package to implement Handlebars.js for your Views, use the MySQL2 and Sequelize packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package to use environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages to add authentication.

Note: The express-session package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

Usage
AS A developer who writes about tech

I WANT a CMS-style blog site

SO THAT I can publish articles, blog posts, and my thoughts and opinions

License
License: MIT
Contributing
At this time there are no other contributors on this application

Tests
At this time there are no tests running on this application

Questions
If you have any further questions about my application, please feel free to contact me using the infromation below:
Brady Buchholz
bradybuchholz@gmail.com