[![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Badge](https://img.shields.io/badge/GitHub-chabivz-blueviolet?style=flat-square&logo=appveyor)](https://github.com/twashke)
# Tech Blog

- A blog site made for coders. As a coder I wanted to build a web app where I can write and share information about coding, designing and 

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#License)

## About the Project
- The motivation for this project is to build a commpunity of developers where coders share, stay up-to-date and grow their careers in Tech industry.
- This website will allow users to `Sign in` to view their own personal Dashboard to post and showcase their article. 
- Using `New Article` button, the user can post their own article and delete existing article(s) that they have posted. 
- `Logout` will end the session of the user.
- `Login` Able to login registered users. 

- Built with the following packages: 
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [bulma](https://bulma.io/)
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  - [CSS](https://www.w3schools.com/css/)
  - [express](https://www.npmjs.com/package/express)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [express-session](https://www.npmjs.com/package/express-session)
  - [HTML](https://www.w3schools.com/html/)
  - [handlebars](https://www.npmjs.com/package/handlebars)
  - [Javascript](https://www.npmjs.com/package/CSS)
  - [path](https://www.npmjs.com/package/path)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [mysql](https://www.npmjs.com/package/mysql)
  - [mysql2](https://www.npmjs.com/package/mysql2)
  - [sequelize](https://www.npmjs.com/package/sequelize)

## Installation

- Open [Tech Blog](https://github.com/Chabivz/014-TechBlog)
- Clone the repository
- install all the packages by `npm i` or `npm i handlebars path express express-session express-handlebars connect-session-sequelize mysql sequelize dotenv bcrypt mysql2`
- Copy `.envEXAMPLE` and paste to create an `.env` file. Input your `MySQL` credentials for connection.
- Copy `Database Schema` and Paste it to local `Mysql Workbench`
- Seed by going typing `node seeds/seed.js ` in the terminal.
- Start the server by typing `node server.js` or `nodemon`

## Usage
- Visit the deployed Heroku app [Tech Blog](https://limitless-citadel-24664.herokuapp.com/)
- Login by clicking the `Login` button, or if you are not a user click `Signup` button on the login modal.
- Enter `Name`, `Email` and `Password`.
- Create a new article by clicking `New Article`. 
- On `New Article` you can delete an existing article that you have posted by clicking the `Delete` button
- `Comment` User can comment on the selected article if they are logged in.
- `Logout` will end the session for the User

|Demo|
|---|
|![Online Demo](./assets/images/DemoTechBlog.gif)|
|Homepage|
|![Homepage](./assets/images/Homepage.png)|
|Signup|
|![Signup](./assets/images/Signup.png)|
|New Article|
|![New Article](./assets/images/NewArticle.png)|
|Article Page and Adding Comment|
|![Article](./assets/images/Article.png)|
|Delete Article|
|![Delete Article](./assets/images/DeleteArticle.png)|

## Question

- [Email](mailto:chrisabiva@hotmail.com)
- [Github](https://github.com/Chabivz)
## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.