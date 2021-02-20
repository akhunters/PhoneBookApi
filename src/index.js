require("./models/Contact");

const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDocument = require('./swagger.json');

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const contactRoutes = require("./routes/ContactRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(requireAuth, contactRoutes);

app.use(express.static(path.join(__dirname, "../client/build")));

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lczfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//ssh -i "shubukey.pem" ubuntu@ec2-13-233-99-61.ap-south-1.compute.amazonaws.com

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log(" error connecting to mongo instance " + err);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port 8080");
});
