const { v4 } = require("uuid");

const fetchQuizQuestions = (req, res) => {
  const data = [
    {
      id: v4(),
      title: "Office Quiz",
      image: "https://media.fromthegrapevine.com/assets/images/2018/4/the-office-u.S..jpg.696x0_q71_crop-smart.jpg?auto=compress&cs=tinysrgb&dpr=2&h=5100",
      questions: [
        {
          id: v4(),
          question: "What's Pam's favorite flavor of yogurt?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "Vanilla",
              isRight: false,
            },
            {
              id: v4(),
              text: "Strawberry",
              isRight: false,
            },
            {
              id: v4(),
              text: "Mixed berry",
              isRight: true,
            },
            {
              id: v4(),
              text: "Blueberry",
              isRight: false,
            },
          ],
        },
        {
          id: v4(),
          question: "What does Kevin suggest Dwight put in his gun holster?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "Gun",
              isRight: false,
            },
            {
              id: v4(),
              text: "Banana",
              isRight: true,
            },
            {
              id: v4(),
              text: "Cellphone",
              isRight: false,
            },
            {
              id: v4(),
              text: "Paper",
              isRight: false,
            },
          ],
        },
      ],
    },
    {
      id: v4(),
      title: "Friends Quiz",
      image: "https://variety.com/wp-content/uploads/2020/02/friends-tv-series.jpg?w=1000",
      questions: [
        {
          id: v4(),
          question: "How many times was Ross legally divorced?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "3",
              isRight: true,
            },
            {
              id: v4(),
              text: "4",
              isRight: false,
            },
            {
              id: v4(),
              text: "2",
              isRight: false,
            },
            {
              id: v4(),
              text: "5",
              isRight: false,
            },
          ],
        },
        {
          id: v4(),
          question: "Which of the following ingredients were not in Rachel's iconic Thanksgiving trifle?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "Ladyfingers and jam",
              isRight: false,
            },
            {
              id: v4(),
              text: "Beef with peas and onions",
              isRight: false,
            },
            {
              id: v4(),
              text: "Raisins and walnut",
              isRight: true,
            },
            {
              id: v4(),
              text: "Bananas and custard",
              isRight: false,
            },
          ],
        },
      ],
    },
    {
      id: v4(),
      title: "Movies Quiz",
      image: "https://wallpapercave.com/wp/wp5483697.jpg",
      questions: [
        {
          id: v4(),
          question: "The conversation between Uma Thurman and John Travolta at Jack Rabbit Slim’s in Pulp Fiction referenced the plot of which future Tarantino movie?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "Kill Bill",
              isRight: true,
            },
            {
              id: v4(),
              text: "Jackie Brown",
              isRight: false,
            },
            {
              id: v4(),
              text: "Sin City",
              isRight: false,
            },
            {
              id: v4(),
              text: "From Dusk till Dawn",
              isRight: false,
            },
          ],
        },
        {
          id: v4(),
          question: "Which of these is not a fiction brand created by Tarantino for his movie universe?",
          points: 2,
          negativePoints: -1,
          options: [
            {
              id: v4(),
              text: "Red apple cigarettes",
              isRight: false,
            },
            {
              id: v4(),
              text: "Big kahuna burgers",
              isRight: false,
            },
            {
              id: v4(),
              text: "Arigato donuts",
              isRight: true,
            },
            {
              id: v4(),
              text: "Jack rabbit slim’s",
              isRight: false,
            },
          ],
        },
      ],
    },
  ];

  return res.status(200).json({ data });
};

module.exports = { fetchQuizQuestions };
