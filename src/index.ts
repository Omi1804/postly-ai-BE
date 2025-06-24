const express = require("express");
const colors = require("colors");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.clear();
  console.log(colors.green.bold("Welcome to the Express Server!"));
  console.log(colors.blue.underline(`Server is running on port ${PORT}`));
});
