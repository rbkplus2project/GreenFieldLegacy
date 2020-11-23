# Project title 
HotelCom
## Table of contents
* project aim
* general info
* technologies
* launch - setup
* features & todo
* deployment
### Project aim 
This project aims to help travelers or visitors of different areas to take a look on available hotels on their destination.
### General info
This project is educational requirment task to develop skills in building fullstack website 
### Technologies
Project is created with:
MERN: MongoDB-ExpressJs-React-Nodejs
*  express : 4.17.1,
*  jsonwebtoken: 8.5.1
*  mongoose: 5.10.13
*  react: 17.0.1
*  stripe: 8.122.1
### Launch
* To run this project, install it locally using npm:
* Inside terminal #1:
    * $cd client 
    * $npm i
    * $npm start
* Inside terminal #2:
    * $cd server
    * $npm i
    * $npm nodemon server
### Features & To Do
* View hotel of specific area
* View info of the hotel
    * Rating
    * Price
    * Reserve Hotel
* Create list of favorite hotels (add-remove)
* Create list of reserved hotels (add-remove)
* Do Booking process, Pay for reserved hotels
### Deployment done using
Heroku
### When you fork this
* make sure you are using the proxy(putting the localhost:5000) for your master branch in pakege json of the client(and remove all local/5000) from all of the files
* make sure to put (in the dependandies) "heroku-postbuild" : "cd client && npm install && npm run build" in the pakege json of the client
*  (in the dependandies) "start": "node server.js" in pakege.json of the server
* in server.js process.env.PORT || 5000; && the if(process.env.NODE_ENV === 'production')...
* mongo db index  file add  process.env.MONGODB_URI || dbUri
* remove the yarn lock file
* remove the .gitIgnore(where you don't need it (inside server file)
* remove the cached files in your project (git rm  -r --cached .) (the . for all)
* make a branch for heroku deployments and put this in the packega.json==>"proxy" : "https://raptors-hotel.herokuapp.com"
* download the heroku cli to use its props in git bash
* heroku login
* heroku create (your app name)
* go to heroku dashboard ==>on your projct-settings==>(scroll down)reveal config files ==>click on it and put MONGODB_URI and your mongo link
* git add .
* git commit -m "deploying"
* git push (name of the branch) master
* the master branch and the deployment branch are the same but different proxy pakege.json