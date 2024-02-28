const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./models/model.js");

const joinNowRoutes = require("./routers/joinnow.routers.js")


 
// Sync database


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
 
const corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors());
 
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to anish application." });
});


app.use('/api/joinnow', joinNowRoutes);



// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running anish you are right on port http://localhost:${PORT}.`);
});
