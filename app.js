const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// cors setup
app.use(cors());

// body parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/index");
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});