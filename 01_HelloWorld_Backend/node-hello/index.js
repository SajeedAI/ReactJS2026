const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Hello World from Node JS");

});

app.listen(3000, ()=>{
    console.log("Server running at ")
})