const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv config
dotenv.config();

// app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// API routes (ALWAYS FIRST)
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// serve static React files
app.use(
    express.static(path.join(__dirname, "lwin-portfolio", "build"))
);

// React router fallback (EXCLUDES /api)
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(
        path.join(__dirname, "lwin-portfolio/build/index.html")
    );
});

// port
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
