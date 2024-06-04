const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
const BUILD_FOLDER = "dist";

app.use(express.static(path.join(__dirname, BUILD_FOLDER)));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, BUILD_FOLDER, "index.html"));
});

app.listen(PORT);
