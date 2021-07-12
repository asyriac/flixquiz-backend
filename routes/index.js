const express = require("express");
const router = express.Router();

const { fetchQuizQuestions, createQuiz } = require("../controllers/quiz.controller");
const { registerUser, loginUser, logoutUser, protectedRoute, currentUser } = require("../controllers/user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/current-user", protectedRoute, currentUser);

router.get("/quiz", fetchQuizQuestions);
router.post("/create-quiz", protectedRoute, createQuiz);

module.exports = router;
