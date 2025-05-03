var express = require("express");
var app = express();

app.use("/", express.static("webapp"));

app.get("/", (req, res) => {
    res.send("welcome");
});

app.get("/home", (req, res) => {
    res.send('<label>Enter name:</label><input><br><button>Submit</button>');
});

const aVendors = [
    {
        "id": 101,
        "name": "harshitha",
        "city": "Bangalore",
        "country": "India"
    },
    {
        "id": 102,
        "name": "krish",
        "city": "Chennai",
        "country": "India"
    }
];

app.get("/vendors", (req, res) => {
    res.json(aVendors);
});

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/webapp/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
