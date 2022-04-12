const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// code below:

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controller");

app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouse);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);

// code above this:

app.listen(4004, () => {
  console.log("Server is running on port: 4004");
});
