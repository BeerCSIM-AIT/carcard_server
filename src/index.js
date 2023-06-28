require("dotenv").config({ path: "./config.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

// const cardController = require("./controllers/card.controller");
// const carController = require("./controllers/car.controller");

const carRoute = require('./routes/car.route');
const cardRoute = require('./routes/card.route')
const hrRoute = require('./routes/hr.route')
const authenRoute = require('./routes/authen.route')
const otherRoute = require('./routes/others.route')

const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({ message: "Here I am." });
});

app.use('/card',cardRoute)
app.use('/car', carRoute)
app.use('/emp',hrRoute)
app.use('/login',authenRoute)
app.use('/', otherRoute)

app.listen(PORT, () => {
  console.log("App is running on port: " + PORT);
});

// const run = async () => {
//   let date = new Date();
//   const card1 = await cardController.createCard({
//     emp_id: "594623",
//     issue_date: Date.now(),
//     expire_date: Date.now(),
//     issued_by: "594623",
//   });

//   const car1 = await carController.createCar(card1.id, {
//     car_regis_number: "กก1245",
//     brand: "Toyota",
//     province: "กรุงเทพ",
//     color: "ดำ",
//     car_type: "ผู้ปฏิบัติงาน",
//     is_approved: true,
//     is_active: true,
//   });

//   const card1Data = await cardController.findCardById(card1.id);
//   console.log(">> Card id: " + card1.id, JSON.stringify(card1Data, null, 2));

//   const car1Data = await carController.findCarById(car1.id);
//   console.log(">> Car id" + car1.id, JSON.stringify(car1Data, null, 2));
// };

const db = require("./models");
db.sequelize.sync(/*{ force: true }*/)
  // .then(() => {
  //   run();
  // });
