//option 1
const express = require("express"); // importing express
const app = express(); // creating instance of the app
//option 2
const PORT = process.env.PORT || 8000;

//option 1
app.get("/", (req, res) => {
  // if someone goes to my rout, display a message
  res.send("Hello World");
});
const hello = (req, res) => {
  res.send("Hello World");
};
app.get("/", hello);

//or

//option 2
app.listen(PORT, () => {
  console.log("server is running on PORT", PORT);
});
const hello = (req, res) => {
  res.send("Hello World");
};
app.get("/", hello);

//TESTING
//making API
app.get("/", (req, res) => {
  // if someone goes to my rout, display a message
  res.send("Hello World");
});
const hello = (req, res) => {
  res.json({ message: `hello welcome to my API` });
};
app.get("/", hello);

app.listen(8000); // last line of code, listent to port number
