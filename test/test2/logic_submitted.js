answer = JSON.parse(sessionStorage.getItem("answers"));
correct = JSON.parse(sessionStorage.getItem("correct"));
score = sessionStorage.getItem("score");
sessionStorage.clear();
result = document.querySelector(".result");
result.innerText = "Răspunsuri corecte: " + score;
if (score <= 3)
    result.style.color = "red";
else if (score <= 6)
    result.style.color = "orange";
else result.style.color = "green";
for (let i = 1; i <= 10; i++) {
    console.log(i);
    const q_nr = document.querySelector(`.Q${i}`);
    let question = document.querySelector(`.buttons${i}`).children;
    question = Array.from(question);
    if (answer[i] == correct[i]) {
        q_nr.innerText = "1/1";
        q_nr.style.color = "green";
        question[correct[i]].classList.add('btn-success');
    }
    else if (answer[i] == -1) {
        q_nr.style.color = "red";
        question[correct[i]].classList.add('btn-success');
    }
    else {
        q_nr.style.color = "red";
        question[correct[i]].classList.add('btn-success');
        question[answer[i]].classList.add('btn-danger');
    }
}