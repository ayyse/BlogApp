const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/blog/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/admin", "blog-create.html"))
})

router.use("/blogs/:blogid", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/admin", "blog-edit.html"))
})

router.use("/blogs", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/admin", "blog-list.html"))
})

module.exports = router;