const express = require("express");
const router = express.Router();

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
    blogs: [
        {
            blogid: 1,
            baslik: "baslik1",
            aciklama: "aciklama1",
            resim: "1.jpeg",
            anasayfa: true
        },
        {
            blogid: 2,
            baslik: "baslik2",
            aciklama: "aciklama2",
            resim: "2.jpeg",
            anasayfa: true
        },
        {
            blogid: 3,
            baslik: "baslik3",
            aciklama: "aciklama3",
            resim: "3.jpeg",
            anasayfa: false
        }
    ]
}

router.use("/blogs/blogid", function(req, res) {
    res.render("users/blog-details")
})

router.use("/blogs", function(req, res) {
    res.render("users/blogs", data)
})

router.use("/", function(req, res) {
    res.render("users/index", data)
})

module.exports = router;