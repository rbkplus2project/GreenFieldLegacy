const express = require('express');
const db = require("./database")
const cors = require("cors")

let app = express();

db()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/user', require('./routes/user'));
app.use('/fav', require('./routes/favourates'));
app.use('/reservation', require('./routes/resevation'));
app.use("/payment", require("./routes/payment"))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))

  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/../client/build/index.html")
  })
}
let port = process.env.PORT || 5000;
const host = '0.0.0.0';

app.listen(port, host, function () {
  console.log(`listening on port ${port}`);

});
