const quiz = [
    {
        question: "Q1 : Who is the Prime Minister ?,",
        a: "ELon Musk",
        b: "Diwaakar",
        c: "Modi",
        d:"Gadhi",
        ans: "ans3"
    },
    {
        question: "Q2 : CM of TN?,",
        a: "Stalin",
        b: "Jaya",
        c: "Rohith",
        d:"Diwa",
        ans: "ans1"
    },
    {
         question: "Q3 : CM of AB?,",
        a: "xxx",
        b: "YYY",
        c: "ABC",
        d:"BBC",
        ans: "ans3"

    },
     {
        question: "Q4 : Who is the Prime Minister ?,",
        a: "ELon Musk",
        b: "Diwaakar",
        c: "Modi",
        d:"Gadhi",
        ans: "ans3"
    },
    {
        question: "Q5 : CM of TN?,",
        a: "Stalin",
        b: "Jaya",
        c: "Rohith",
        d:"Diwa",
        ans: "ans1"
    },
    {
         question: "Q6 : CM of AB?,",
        a: "xxx",
        b: "YYY",
        c: "ABC",
        d:"BBC",
        ans: "ans3"

    },
     {
        question: "Q7 : Who is the Prime Minister ?,",
        a: "ELon Musk",
        b: "Diwaakar",
        c: "Modi",
        d:"Gadhi",
        ans: "ans3"
    },
    {
        question: "Q8 : CM of TN?,",
        a: "Stalin",
        b: "Jaya",
        c: "Rohith",
        d:"Diwa",
        ans: "ans1"
    },
    {
         question: "Q9 : CM of AB?,",
        a: "xxx",
        b: "YYY",
        c: "ABC",
        d:"BBC",
        ans: "ans3"

    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const result = document.querySelector('.res');
const answers = document.querySelectorAll(".answer");
let score = 0;
let questions_count = 0;
document.querySelector(".q0").classList.add("glow");
const loadquestion = () => {
    const questionlist = quiz[questions_count];
    question.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;  
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
loadquestion();
const clickedanswers=[]
const addclickanswer = () => {
    let answer;
    answers.forEach((curEle) => {
        if (curEle.checked) {
            answer = curEle.id;
            clickedanswers.push(answer);
        }
      
    })
      
}
const deselectall = () => {
    answers.forEach((curEle) => curEle.checked = false);
}
next.addEventListener('click', () => {
    addclickanswer();
    let previous = ".q" + questions_count;
    document.querySelector(previous).classList.remove("glow");
    questions_count++;
    let cur = ".q" + questions_count;
    document.querySelector(cur).classList.add("glow");
    if (questions_count < quiz.length) {
        deselectall();
        selectedans();
        loadquestion();
    }
    else {
        question.innerText = "Submit it to Check Your Score ";
        document.querySelector(".options").classList.add("visible");
    }
})
const selectedans = () => {
     answers.forEach((curEle) => {
        if (clickedanswers[questions_count] == curEle.id){
            curEle.checked = true;
        }
    })
}
prev.addEventListener('click', () => {
    let previous = ".q" + questions_count;
    document.querySelector(previous).classList.remove("glow");
        questions_count--;
    let cur = ".q" + questions_count;
    document.querySelector(cur).classList.add("glow");
    if (questions_count < quiz.length) {
             document.querySelector(".options").classList.remove("visible");
        loadquestion();
        selectedans();
    }
})

const startmin = 2; 
let time = startmin * 60;
const countdownele = document.querySelector(".countdown");
mytimeout=setInterval(updatecountdown, 1000);
function updatecountdown() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (minutes < 1) {
        document.querySelector(".indicate").classList.remove("visible");
    }
    countdownele.innerHTML=`${minutes}:${seconds}`
    time--;
}

submit.addEventListener('click', () => {
    clearTimeout(mytimeout);
        for (let i=0; i < clickedanswers.length; i++) {
            if (clickedanswers[i] == quiz[i].ans) {
                score++;
            }
        }
    console.log(score);
    const Re = document.querySelector(".result");
    Re.classList.remove("visible");
    result.innerText = score;
    
    })

function first(clicked_id) {
    let c=parseInt(clicked_id);
    questions_count=c;
    loadquestion();
    selectedans();
    event.preventDefault();
}


