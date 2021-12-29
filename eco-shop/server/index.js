const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const cors = require("cors");
const path = require("path");
const Router = require("./router");
const cloudinary = require("cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinaryApiSecret =
  process.env.CLOUDINARY_API_SECRET || "ZMIxw_VfYUaPHB32TYc9uBTDPOY";

const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY || "888676627392228";
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "photos",
  // Generation filename
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`);
  },
});

const cloudinaryName = process.env.CLOUDINARY_CLOUD_NAME || "hovp85fel";

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});

const upload = multer({ storage: storage });
app.post("/uploadImage", upload.single("file"), (request, response) => {
  console.log("!!!!!");
  response.status(200).json({ success: true, msg: "Зображення Додано !" });
});

app.use(express.static("final-project/build"));
app.use("/auth", Router);

mongoose.connect(
  "mongodb+srv://CodeRunner:01072021@healthy-food.tlidj.mongodb.net/online-shop?retryWrites=true&w=majority"
);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "final-project/build/index.html"));
});

app.listen(port, () => console.log(`Server was started on port ${port}`));
