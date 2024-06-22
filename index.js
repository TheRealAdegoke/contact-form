require("dotenv").config();
const express = require("express");
const app = express();
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

const start = async () => {
  const port = process.env.PORT;
  try {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
