const express = require('express');
const bodyParser = require('body-parser');
const {User } = require("./database")
const cors = require("cors")


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



app.use('/', router);

let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
