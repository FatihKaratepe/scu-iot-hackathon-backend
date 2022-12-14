const denemeService = require("../services/deneme.service");

exports.deneme = async (req, res) => {
    console.log("controller girdi");
    let bids = [];
    bids = await denemeService.deneme();
    res.status(200).send(bids);
}
