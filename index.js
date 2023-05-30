const express = require("express");
const { connection } = require("./config/db");
const { authMiddleware } = require("./middleware/auth");
const { userRoute } = require("./routes/user.routes");
const { flightRoute } = require("./routes/flight.routes");
const { bookingRoute } = require("./routes/booking.routes");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Flight Ticket Booking System Server side");
});

app.use(express.json());

app.use("/api", userRoute);

app.use(authMiddleware);

app.use("/api", flightRoute)
app.use("/api", bookingRoute)

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Db connected");
  } catch (err) {
    console.log(err.message);
  }
  console.log("http://localhost:4500/");
});
