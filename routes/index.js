const express = require("express");
const router = express.Router();

const { fetchQuizQuestions } = require("../controllers/quiz.controller");

router.get("/quiz", fetchQuizQuestions);

module.exports = router;
