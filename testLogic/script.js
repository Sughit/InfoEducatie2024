const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1, questions.length);
    startTimer(15);
    startTimerLine(0);
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count)
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Timp rămas";
    see_why.classList.remove("show");
    next_btn.classList.remove("show");
    
    
}


quit_quiz.onclick = ()=>{
    window.location.reload();
}

const see_why = quiz_box.querySelector(".see_why");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

var choice;
function choose(choice){
    
    localStorage.setItem("quest", choice);
}
function verify(){

        choice = localStorage.getItem("quest")

        if(choice == 1)
            questions = questions1;
        else if(choice == 2)
            questions = questions2;
        else if(choice == 3)
            questions = questions3;
        else if(choice == 4)
            questions = questions4;
        else if(choice == 5)
            questions = questions5;
        else if(choice == 6)
            questions = questions6;
        else if(choice == 7)
            questions = questions7;
        else if(choice == 8)
            questions = questions8;
        else if(choice == 9)
            questions = questions9;
        else if(choice == 10)
            questions = questions10;
        else if(choice == 11)
            questions = questions11;
        else if(choice == 12)
            questions = questions12;
        else if(choice == 13)
            questions = questions13;
        else if(choice == 14)
            questions = questions14;
        highlight = questions[que_count].tag; 
}

function seeWhy()
{
    window.location.href = highlight;
}

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++;
        highlight = questions[que_count].tag;
        showQuetions(que_count);
        queCounter(que_numb, questions.length);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        
        timeText.textContent = data[JSON.parse(localStorage.getItem('limba'))].timpRamas;
        see_why.classList.remove("show");
        next_btn.classList.remove("show");
        
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.innerHTML;
    let correcAns = questions[que_count].answer;

    const allOptions = option_list.children.length;
    
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].innerHTML == correcAns){
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    see_why.classList.add("show");
    next_btn.classList.add("show");
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    let score = results(userScore, questions.length, JSON.parse(localStorage.getItem('limba')));
    scoreText.innerHTML = score;
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter); 
            timeText.textContent = data[JSON.parse(localStorage.getItem('limba'))].gataTimpul; 
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].innerHTML == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            see_why.classList.add("show");
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index, len){
    bottom_ques_counter.innerHTML = intrebariCount(index, len, JSON.parse(localStorage.getItem('limba')));
}
function results(userScore, len, language)
{
    if(language == "engleza"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Bravo! 🎉, you did <p>'+ userScore +'</p> of <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Pretty good 😎, you did <p>'+ userScore +'</p> of <p>'+ len +'</p></span>';
            case 1: return '<span>Try again 😐, you only did <p>'+ userScore +'</p> of <p>'+ len +'</p></span>';
            case 0: return '<span>None... 😐, you did <p>'+ userScore +'</p> of <p>'+ len +'</p></span>'
        }
    }
    if(language == "romana"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Bravo! 🎉, ai făcut <p>'+ userScore +'</p> din <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Destul de bine 😎, ai făcut <p>'+ userScore +'</p> din <p>'+ len +'</p></span>';
            case 1: return '<span>Mai încearcă 😐, ai făcut doar <p>'+ userScore +'</p> din <p>'+ len +'</p></span>';
            case 0: return '<span>Niciuna... 😐, ai făcut <p>'+ userScore +'</p> din <p>'+ len +'</p></span>'
        }
    }
    if(language == "maghiara"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Bravó! 🎉, sikerült <p>'+ userScore +'</p> tól től <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Nagyon jó 😎, sikerült <p>'+ userScore +'</p> tól től <p>'+ len +'</p></span>';
            case 1: return '<span>Próbáld újra 😐, most sikerült <p>'+ userScore +'</p> tól től <p>'+ len +'</p></span>';
            case 0: return '<span>Egyik sem... 😐, sikerült <p>'+ userScore +'</p> tól től <p>'+ len +'</p></span>'
        }
    }
    if(language == "germana"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Bravo! 🎉, das hast du <p>'+ userScore +'</p> aus <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Ziemlich gut 😎, das hast du <p>'+ userScore +'</p> aus <p>'+ len +'</p></span>';
            case 1: return '<span>Versuchen Sie es noch einmal 😐, Sie haben es gerade getan <p>'+ userScore +'</p> aus <p>'+ len +'</p></span>';
            case 0: return '<span>Keine... 😐, das hast du <p>'+ userScore +'</p> aus <p>'+ len +'</p></span>'
        }
    }   
    if(language == "franceza"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Bravo! 🎉, vous l\'avez fait <p>'+ userScore +'</p> depuis <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Plutôt bien 😎, tu l\'as fait <p>'+ userScore +'</p> depuis <p>'+ len +'</p></span>';
            case 1: return '<span>Réessayez 😐, vous venez de le faire <p>'+ userScore +'</p> depuis <p>'+ len +'</p></span>';
            case 0: return '<span>Aucun... 😐, vous l\'avez fait <p>'+ userScore +'</p> depuis <p>'+ len +'</p></span>'
        }
    }
    if(language == "rusa"){
        var score = parseInt(userScore);
        var remaining = len-userScore;
        ModifyStats(score, remaining);
        switch(userScore)
        {
            case 5: return '<span>Браво! 🎉, Ты сделал <p>'+ userScore +'</p> ot <p>'+ len +'</p></span>';
            case 2: case 3: case 4: return '<span>Очень хорошо 😎, ты сделал <p>'+ userScore +'</p> ot <p>'+ len +'</p></span>';
            case 1: return '<span>Попробуй еще раз 😐, ты только что сделал <p>'+ userScore +'</p> ot <p>'+ len +'</p></span>';
            case 0: return '<span>Нет... 😐, Ты сделал <p>'+ userScore +'</p> ot <p>'+ len +'</p></span>'
        }
    } 
}

function intrebariCount(index, len, language)
{
    if(language == "engleza") return '<span><p>'+ index +'</p> of <p>'+ len +'</p> Questions</span>';
    if(language == "romana") return '<span><p>'+ index +'</p> din <p>'+ len +'</p> Întrebări</span>';
    if(language == "maghiara") return '<span><p>'+ index +'</p> kérdés az <p>'+ len +'</p>-ből</span>';
    if(language == "germana") return '<span><p>'+ index +'</p> von <p>'+ len +'</p> Fragen</span>';
    if(language == "franceza") return '<span><p>'+ index +'</p> questions sur <p>'+ len;
    if(language == "rusa") return '<span><p>'+ index +'</p> вопроса из <p>'+ len;
}

function ModifyStats(score, remaining)
{
    var corecte = score;
    var gresite = remaining;
    localStorage.setItem('corecte', corecte);
    localStorage.setItem('gresite', gresite);
    localStorage.setItem('finishedATest', true);
    console.log(localStorage.getItem('finishedATest'));
}
