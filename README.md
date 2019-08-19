

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
![alt text](https://i.ibb.co/0tGQfg1/cap1.png)

API LOGIN

* This api return token, and this have to authenticate the other apis
![alt text](https://i.ibb.co/qR0j3G4/Cap2.png)
API USER'S

* This api es Restful and authenticate by jwt
* The api verify if user is admin
![alt text](https://i.ibb.co/RChbmYQ/Cap3.png)
API TASK'S

* This api es Restful and authenticate by jwt
* The admin can call all api and user only can call list and update about their task
![alt text](https://i.ibb.co/n09rHph/Cap4.png)
## Test

*  $npm test

## Author
Libardo Zuñiga Mendoza - Senior Backend

3015129853 - libardo.zuniga@gmail.com
