const connection = require('./app/config/mysql');
const express = require('express');
const cors = require("cors");
const path = require("path");
const app = express();

// express server configurations
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// mysql connection
connection.connect(function (error) {
    if (error) throw error;
    console.log('MySQL connected.');
});

// start express server
app.get('/', (req, res) => {
    res.status(200).send('ok');
});
require("./app/routes/deneme.routes")(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});