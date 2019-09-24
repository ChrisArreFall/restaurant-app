const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

var connection_string = "192.168.43.121:15221/myrestaurant";

const db = require("monk")(connection_string);

const collection_foodItems = db.get("menu");

// our localhost port
const port = process.env.PORT || 3001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

io.on("connection", socket => {
  console.log(
    "New client connected " + socket.id + 
    " IP: " + socket.handshake.address// + 
    //":" + socket.handshake.port
  );

  // Returning the initial data of food menu from Menu collection
  socket.on("initial_data", () => {
    collection_foodItems.find({}).then(docs => {
      io.sockets.emit("get_data", docs);
    });
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend */

app.use(express.static("build"));

server.listen(port, () => console.log(`Listening on port ${port}`));