const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];
alert("Welcome to Quiz Ninja");
let score = 0;
for (const [question, answer] of quiz) {
    const responce = prompt(question);
    if (responce === answer) {
        alert("Correct!");
        score++
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
}