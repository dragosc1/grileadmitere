var correct = [];
correct[1] = 0, correct[2] = 4, correct[3] = 3, correct[4] = 3, correct[5] = 0;
correct[6] = 3, correct[7] = 5, correct[8] = 1, correct[9] = 3, correct[10] = 4;
var answer = [];
for (let i = 1; i <= 10; i++)
    answer[i] = -1;
for (let i = 1; i <= 10; i++) {
    let question = document.querySelector(`.buttons${i}`).children;
    question = Array.from(question);
    question.forEach(button => button.addEventListener('click', function(e) {
        for (let j = 0; j < 6; j++) {
            if (question[j].value != button.value) 
                question[j].classList.remove('pressed');
        }
        button.classList.add('pressed');
        answer[i] = button.value - 1;
    }));
}
const submit = document.querySelector('.submit-btn');
var score = 0;
if (submit != null) {
    submit.addEventListener('click', function(e) {
        for (let i = 1; i <= 10; i++)
            if (answer[i] == correct[i])
                score++;
        sessionStorage.clear();
        sessionStorage.setItem("answers", JSON.stringify(answer));
        sessionStorage.setItem("correct", JSON.stringify(correct));
        sessionStorage.setItem("score", score);
    });
}