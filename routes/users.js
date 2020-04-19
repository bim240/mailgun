var express = require("express");
var router = express.Router();
var mailController = require("../controller/sendmail");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/sendmail", mailController.sendMail);
module.exports = router;
