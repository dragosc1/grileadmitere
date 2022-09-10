var correct = [];
correct[1] = 0, correct[2] = 2, correct[3] = 2, correct[4] = 1, correct[5] = 0;
correct[6] = 2, correct[7] = 0, correct[8] = 1, correct[9] = 2, correct[10] = 2;
correct[11] = 3, correct[12] = 0, correct[13] = 3, correct[14] = 1, correct[15] = 0;
var answer = [];
for (let i = 1; i <= 15; i++)
    answer[i] = -1;
for (let i = 1; i <= 15; i++) {
    let question = document.querySelector(`.buttons${i}`).children;
    question = Array.from(question);
    question.forEach(button => button.addEventListener('click', function(e) {
        for (let j = 0; j < 4; j++) {
            if (question[j].value != button.value) {
                question[j].classList.remove('active');
                
            }
        }
        button.classList.add('active');
        answer[i] = button.value - 1;
    }));
}
const submit = document.querySelector('.submit-btn');
var score = 0;
if (submit != null) {
    submit.addEventListener('click', function(e) {
        for (let i = 1; i <= 15; i++)
            if (answer[i] == correct[i])
                score++;
        sessionStorage.setItem("answers", JSON.stringify(answer));
        sessionStorage.setItem("correct", JSON.stringify(correct));
        sessionStorage.setItem("score", score);
    });
}