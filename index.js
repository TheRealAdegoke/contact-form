// Check if not in production environment, then load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  console.log("Running in development.");
} else {
  console.log("Running in production environment.");
}

const express = require("express");
const app = express();
const cors = require("cors");
const contactRoute = require("./Routes/contactRoutes");

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://contact-form-zeta-one.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
      "https://malff.vercel.app",
      "https://malff.org",
      "www.malff.org"
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
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
  const port = 3000;
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
