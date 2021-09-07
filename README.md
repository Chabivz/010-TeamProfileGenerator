[![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Badge](https://img.shields.io/badge/GitHub-chabivz-blueviolet?style=flat-square&logo=appveyor)](https://github.com/chabivz)
# 🖥️ Team Profile Generator

A Node.js command-line application that takes in information about employees on a software engineering team, that generates an HTML webpage that diesplays summaries for each person.

## 🧐  Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#License)

## ✨ About the Project
- Team Profile Generator runs on Node.js
- The Generator also run tests making the code maintainable. 

- When `Manager` is selected the user will have to input 
  - `name`, `id`, `email`, `role`, and `office number`
- When `Engineer` is selected the user will have to input 
  - `name`, `id`, `email`, `role`, and `github username`
- When `Intern` is selected the user will have to input 
  - `name`, `id`, `email`, `role`, and `school name`  
  
- It will collect information in the command line and when done with the inputs. It will create/overwrite a new index.html
- Built with the following packages:
  - [path](https://www.npmjs.com/package/path)
  - [jest](https://www.npmjs.com/package/jest)
  - [fs](https://www.npmjs.com/package/fs)
  - [inquirer](https://www.npmjs.com/package/inquirer)
## Installation

- Open [Github Repo](https://github.com/Chabivz/010-TeamProfileGenerator)
- Clone the repository
- install all the packages by `npm i`
- Start the server by typing `node server.js` or `npm run start`

## Usage

- Login by clicking the `Login` button, or if you are not a user click `Signup` button on the login modal.
- Enter `Name`, `Email` and `Password`.
- Create a new article by clicking `New Article`. 
- On `New Article` you can delete an existing article that you have posted by clicking the `Delete` button
- `Comment` User can comment on the selected article if they are logged in.
- `Logout` will end the session for the User

|Youtube Walkthrough|
|---|
[![Team Profile Generator Walk Through](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=7X6k_zpWhfc)


## Question

- [Email](mailto:chrisabiva@hotmail.com)
- [Github](https://github.com/Chabivz)
## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.