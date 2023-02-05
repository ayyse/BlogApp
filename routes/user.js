const express = require("express");
const router = express.Router();

const db = require("../data/db");

router.use("/blogs/category/:categoryid", async function(req, res) {
    const id = req.params.categoryid;
    try {
        const [blog, ] = await db.execute("select * from blog where categoryid=?", [id]);
        const [categories, ] = await db.execute("select * from category");
        res.render("users/blogs", {
            title: "Tüm Kurslar",
            blogs: blog,
            categories: categories,
            selectedCategory: id
        });
    }
    catch(err) {
        console.log(err);
    }
})

router.use("/blogs/:blogid", async function (req, res) {
    const id = req.params.blogid;
    try {
        const [blog, ] = await db.execute("select * from blog where blogid=?", [id]);
        if(blog[0]) {
            return res.render("users/blog-details", {
                blog: blog[0]
            });
        }
        res.redirect("/");
    }
    catch(err) {
        console.log(err);
    }
})

router.use("/blogs", async function (req, res) {
    try {
        const [blogs, ] = await db.execute("select * from blog where onay=1");
        const [categories, ] = await db.execute("select * from category");
        res.render("users/blogs", {
            title: "Tüm Kurslar",
            blogs: blogs,
            categories: categories,
            selectedCategory: null
        });
    }
    catch(err) {
        console.log(err);
    }
})

router.use("/", async function (req, res) {
    try {
        const [blogs, ] = await db.execute("select * from blog where anasayfa=1 and onay=1");
        const [categories, ] = await db.execute("select * from category");
        res.render("users/index", {
            title: "Popüler  Kurslar",
            blogs: blogs,
            categories: categories,
            selectedCategory: null
        });
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;