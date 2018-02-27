var express = require("express");
var inMemoryDatabase = require("./in-memory-database");
var router = express.Router();

var tasksDb = inMemoryDatabase();
tasksDb.init([
    { name: "Grant", course: "Front-End" }
]);

router.get("/tasks", function(req, res) {
    res.send(tasksDb.readAll());
});

router.post("/tasks", function(req, res) {
    var task = req.body;
    tasksDb.create(tasks);
    res.status(201).send(tasks);
});

router.delete("/tasks/:id", function(req, res) {
    var id = req.params.id;
    console.log(id);
    tasksDb.delete(id);
    res.send("Deleted.");
});

module.exports = router;
