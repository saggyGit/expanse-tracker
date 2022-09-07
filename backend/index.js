const express = require("express");
const app = express();
const conn = require("./db");
const cors = require("cors");





//for connection

conn.connection.on("connected", (err) => {

    if (!err) {
        console.log("connected to the database");
    } else {
        console.log("not connected to database");
    }
})








app.use(cors());
app.use(express.json());

app.use("/myitems", require("./routes/item"));










//server
app.listen(5000, () => {
    console.log("server started successfully");
})