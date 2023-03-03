const router = require("express").Router();
const {startChat} = require('../controller/chat');

router.post("/chat", startChat);

module.exports = router;