const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// body parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser setup
app.use(cookieParser());

// cors setup
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
    optionsSuccessStatus: 200,
  })
);

// DB setup
const initDB = require("./db");
initDB();

const routes = require("./routes/index");
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
