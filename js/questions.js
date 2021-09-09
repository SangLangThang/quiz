// creating an array and passing the number, questions, options, and answers
let questions = [
  
  {
    numb: 1,
    type:'text',
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 2,
    type:'img',
    question: "Weather",
    answer: "./img/broken-clouds-d.png",
    options: [
      "./img/broken-clouds-d.png",
      "./img/broken-clouds-n.png",
      "./img/clear-sky-d.png",
      "./img/clear-sky-n.png",
    ],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
