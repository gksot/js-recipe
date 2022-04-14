const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const quiz = {
  Text: "この星の名前は何でしょう？",
  Image: "Ganymede.jpg",
  choices: [
    {
      Text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      Text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      Text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.Text
  quizImage.src = "./images/" + quiz.Image

  choice1.textContent = quiz.choices[0].Text
  choice2.textContent = quiz.choices[1].Text
  choice3.textContent = quiz.choices[2].Text
}

const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

reloadQuiz()
