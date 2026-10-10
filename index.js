const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;





app.set('view engine', 'ejs');




app.use(express.json()); // middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded bodies


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})