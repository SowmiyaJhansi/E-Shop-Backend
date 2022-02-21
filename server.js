const express = require('express');
const cors = require('cors');
const movies = require('./GET/order');
const genres = require('./GET/product');
const artists = require('./GET/user');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use('/', order);
app.use('/', product);
app.use('/', user);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`All Order Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
app.listen(port, () => console.log(`All Product Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
app.listen(port, () => console.log(`All user Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));


const db = require("./app/order");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
