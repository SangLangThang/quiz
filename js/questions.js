// creating an array and passing the number, questions, options, and answers
let question1 = [
  {
    numb: 1,
    type: "text",
    question:
      "Khi tham gia giao thông, trường hợp nào dưới đây là không an toàn, gây nguy hiểm?",
    answer: "Đi xe đạp chở 1 người ngồi sau.",
    options: [
      "Đi qua đường cùng người lớn.",
      "Không đội mũ bảo hiểm khi ngồi trên xe mô tô, xe máy.",
      "Đi xe đạp chở 1 người ngồi sau.",
    ],
  },
  {
    numb: 2,
    type: "text",
    question:
      "Khi đi qua chỗ đường giao nhau, có tín hiệu đèn, em cần chú ý điều gì?",
    answer:
      "Quan sát kỹ tín hiệu đèn giao thông, khi đèn xanh bật mới được đi.",
    options: [
      "Quan sát kỹ tín hiệu đèn giao thông, khi đèn xanh bật mới được đi.",
      "Nhờ người lớn dẫn qua đường.",
      "Không chú ý tín hiệu đèn mà đi sát lề đương bên phải",
    ],
  },
  {
    numb: 3,
    type: "text",
    question:
      "Em cùng các bạn đi học về thấy một số bạn chơi đùa trên đường, em sẽ làm gì?",
    answer: "Nhắc các bạn không chơi đùa trên đường vì không an toàn.",
    options: [
      "Nhắc các bạn không chơi đùa trên đường vì không an toàn.",
      "Vui chơi cùng các bạn.",
      "Vẫn đi bình thường như không có việc gì sảy ra.",
    ],
  },
  {
    numb: 4,
    type: "text",
    question:
      "Em và bạn em muốn qua đường nhưng quãng đường ấy có nhiều xe cộ đi lại,em sẽ làm thế nào để qua đường an toàn?",
    answer: "Nhờ người lớn dắt qua.",
    options: [
      "Đứng chờ lúc nào vắng xe sẽ chạy nhanh qua.",
      "Nắm tay cùng nhau cùng xin đường để qua.",
      "Nhờ người lớn dắt qua.",
    ],
  },
  {
    numb: 5,
    type: "img",
    question: "Câu hỏi hình ảnh ví dụ: Đâu là hình mặt trời không mây",
    answer: "3",
    options: [
      "./img/broken-clouds-d.png",
      "./img/broken-clouds-n.png",
      "./img/clear-sky-d.png",
      "./img/clear-sky-n.png",
    ],
    alt: ["1", "2", "3", "4"],
  },
];
let question2 = [
  {
    numb: 1,
    type: "text",
    question:
      "Khi tham gia giao thông, trường hợp nào dưới đây là không an toàn, gây nguy hiểm?",
    answer: "Đi xe đạp chở 1 người ngồi sau.",
    options: [
      "Đi qua đường cùng người lớn.",
      "Không đội mũ bảo hiểm khi ngồi trên xe mô tô, xe máy.",
      "Đi xe đạp chở 1 người ngồi sau.",
    ],
  },
  {
    numb: 2,
    type: "text",
    question:
      "Khi đi qua chỗ đường giao nhau, có tín hiệu đèn, em cần chú ý điều gì?",
    answer:
      "Quan sát kỹ tín hiệu đèn giao thông, khi đèn xanh bật mới được đi.",
    options: [
      "Quan sát kỹ tín hiệu đèn giao thông, khi đèn xanh bật mới được đi.",
      "Nhờ người lớn dẫn qua đường.",
      "Không chú ý tín hiệu đèn mà đi sát lề đương bên phải",
    ],
  },
  {
    numb: 3,
    type: "text",
    question:
      "Em cùng các bạn đi học về thấy một số bạn chơi đùa trên đường, em sẽ làm gì?",
    answer: "Nhắc các bạn không chơi đùa trên đường vì không an toàn.",
    options: [
      "Nhắc các bạn không chơi đùa trên đường vì không an toàn.",
      "Vui chơi cùng các bạn.",
      "Vẫn đi bình thường như không có việc gì sảy ra.",
    ],
  },
  {
    numb: 4,
    type: "text",
    question:
      "Em và bạn em muốn qua đường nhưng quãng đường ấy có nhiều xe cộ đi lại,em sẽ làm thế nào để qua đường an toàn?",
    answer: "Nhờ người lớn dắt qua.",
    options: [
      "Đứng chờ lúc nào vắng xe sẽ chạy nhanh qua.",
      "Nắm tay cùng nhau cùng xin đường để qua.",
      "Nhờ người lớn dắt qua.",
    ],
  }
];

let list_questions={
  question1:question1,
  question2:question2
}