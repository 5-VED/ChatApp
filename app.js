const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");
const router = require("./server/routes/web.route");

//connecting to database
mongoose
  .connect("mongodb://localhost/ChatApp", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to database"))
  .catch((err) => console.log(err));

//taking input in json format
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use("/api", router);
// app.get("/", (req, res) => {
//   res.send("index");
// });

//const users = {};

// io.on("connection", (socket) => {
//   //console.log("New User Joined: " + socket.id);

//   socket.on("chatMessage", (data, db) => {
//     console.log("From Client:", data);
//     console.log("Client id: ", socket.id);

// //let chatMsg = new message({})

//     socket.on("disconnect", () => {
//       console.log("User disconnected");
//     });
//   });

//   socket.on("send", (message) => {
//     socket.broadcast.emit("recieve", message);
//   });
// });

server.listen(3001, () => {
  console.log("The server is spinning at port 3001");
});
