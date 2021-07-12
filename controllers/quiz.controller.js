const Quiz = require("../models/quiz.model");

const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  return res.status(201).json({ quiz });
};

const fetchQuizQuestions = async (req, res) => {
  const data = await Quiz.find({});
  return res.status(200).json({ data });
};

module.exports = { fetchQuizQuestions, createQuiz };
