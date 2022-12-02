const express = require("express")
const router = express.Router()
const feedController = require("./controllers/feed-controller")
const passportLogin = require("./passport/passport")

router.post("/api/send-feed",feedController.sendFeed)

router.post("/api/login",passportLogin
)

module.exports = router;
