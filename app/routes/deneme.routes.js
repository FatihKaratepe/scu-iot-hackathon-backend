const controller = require("../controllers/deneme.controller");

module.exports = function (app) {
    app.get("/api/deneme", controller.deneme);
}