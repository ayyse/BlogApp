const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/blogs/blogid", function(req, res) {
    res.render("users/blog-details")
})

router.use("/blogs", function(req, res) {
    res.render("users/blogs")
})

router.use("/", function(req, res) {
    res.render("users/index")
})

module.exports = router;