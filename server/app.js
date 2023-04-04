const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/dataRoutes");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://aritra:1234@visualisation.vqzkkkb.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB", err);
});

app.use("/api/data", dataRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
