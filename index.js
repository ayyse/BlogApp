const express = require("express");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(express.urlencoded({extended: false}))

app.set("view engine", "ejs");

app.use(express.static("node_modules"));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(3000, function() {
    console.log("listening on port 3000")
});