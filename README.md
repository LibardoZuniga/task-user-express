

## Back-end Test /  task-user-express

## About / Synopsis
Test for MILO CREDIT for backend Senior  ,presented by Libardo Zuñiga with the following technologies

* Express
* jsonwebtoken
* sequelize
* sqlite3
* password-hash
* Jest


## Installation

* git clone https://github.com/LibardoZuniga/task-user-express.git
* cd  task-user-express
* npm install

## Usage
Config BD 

* In the file ./config/config.json you can find the configuration about the database(sequelize)
* In the file app.js i make two user's for default, the first is admin and second is user

API LOGIN

* This api return token, and this have to authenticate the other apis

API USER'S

* This api es Restful and authenticate by jwt
* The api verify if user is admin

API TASK'S

* This api es Restful and authenticate by jwt
* The admin can call all api and user only can call list and update about their task

## Test

*  $npm test

## Author
Libardo Zuñiga Mendoza - Senior Backend

3015129853 - libardo.zuniga@gmail.com
