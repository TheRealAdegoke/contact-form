// Check if not in production environment, then load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  console.log("Running in development.");
} else {
  console.log("Running in production environment.");
}

const express = require("express");
const app = express();
const connectDB = require("./Database/connectDB");
const cors = require("cors");
const contactRoute = require("./Routes/contactRoutes");

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://contact-form-inky-theta.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      username: "TheRealAdegoke",
      position: "Lead Backend Engineer",
      rank: "4 star General",
    },
    {
      id: 2,
      username: "TheRealJoseph01",
      position: "Lead Frontend Engineer",
      rank: "Corporal :)",
    },
  ]);
});

app.use("/api", contactRoute);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
