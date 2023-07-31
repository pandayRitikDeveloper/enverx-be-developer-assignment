const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config.env') }); // Import and load environment variables from .env
const bodyParser = require("body-parser");
let mongoose = require('mongoose');
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log(`Connected to the database at ${process.env.MONGO_URI}`);
      })
      .catch((error) => {
        console.error('Error connecting to the database:', error.message);
      });
  }
}

module.exports = new Database();