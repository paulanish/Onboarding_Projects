    const joinNow = require("../controller/joinnow.controller.js");
  
    const router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", joinNow.create);
    // Retrieve all Tutorials
    router.get("/", joinNow.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", joinNow.findOne);
    // Update a Tutorial with id
    router.put("/:id", joinNow.update);
    // Delete a Tutorial with id
    router.delete("/:id", joinNow.delete);
    // Create a new Tutorial
    router.delete("/", joinNow.deleteAll);

    module.exports =  router;


    