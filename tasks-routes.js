var express = require("express");
var inMemoryDatabase = require("./in-memory-database");
var router = express.Router();

var tasksDb = inMemoryDatabase();
tasksDb.init([
    { text: "Feed the cats" }
]);

router.get("/tasks", function(req, res) {
    res.send(tasksDb.readAll());
});

router.post("/tasks", function(req, res) {
    var task = req.body;
    tasksDb.create(task);
    res.status(201).send(task);
});

router.delete("/tasks/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    tasksDb.delete(id);
    res.send("Deleted.");
});

module.exports = router;
