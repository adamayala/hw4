const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));
const faker = require("faker");

app.get("/welcome", function(req, res){
    res.render("index.ejs", {faker : faker });
});

app.get("/soft_eng", function(req, res){
    res.render("soft_eng.ejs", {faker : faker });
});

app.get("/game_dev", function(req, res){
    res.render("game_dev.ejs", {faker : faker });
});

app.get("/data_sci", function(req, res){
    res.render("data_sci.ejs", {faker : faker });
});

app.get("/net_sec", function(req, res){
    res.render("net_sec.ejs", {faker : faker });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});