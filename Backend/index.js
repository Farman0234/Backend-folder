const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const statusMonitor = require("express-status-monitor")();
const app = express();
const port = 799;

app.use(statusMonitor);
app.use(express.json());
app.use(cors());


// mongoose.connect("mongodb+srv://farmananees234_db_user:Pakistan.mc@cluster1.slzyrj5.mongodb.net/Cluster1?retryWrites=true&w=majority")
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//   });


const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  password: String,
  id: Number,
})

const User = []

function randomid() {
  return Math.floor(Math.random() * 10000000);
}


app.post("/user", (req, res) => {
  
    console.log(req.body);

    let newUser = {
      id: randomid(),
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
    }

   User.push(newUser);
    res.status(201).send("User is Created ");
});

app.get("/user", (req, res) => { // get all users
    res.send(User);
})

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
