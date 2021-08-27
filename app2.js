//creating an API
const axios = require("axios");
const express = require("express");
const app = express(); // create app

const PORT = process.env.PORT || 8000;

// Controller
const hello = (req, res) => {
  axios.get("https://api.github.com/users/rest2437").then((response) => {
    console.log(response.data);
    const { login, id, node_id } = response.data;
    console.log("login", login);
    console.log("id", id);
    console.log("node_id", node_id);
    res.json({ message: "Hello, welcome to my API", login, id, node_id });
  });
};

const about = (req, res) => {
    res.send('this is a practice app to learn about express routs';)
}

const input = (req, res) => {
    console.log(req);
    res.send('INPUT');
};

// Routes (order matters)
app.get("/", hello);
app.get('/about', about);
app.get('/:input', input);
app.get('/contact', contact);


app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
