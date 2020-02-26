let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

let createQuestion = function (questionText , choice1 , choice2 , choice3 , choice4 , correctChoice) {
    question.innerText = questionText;
    btn1.innerText = choice1;
    btn2.innerText = choice2;
    btn3.innerText = choice3;
    btn4.innerText = choice4;
};

let DoTheStuff = function() {

    btn1.onclick = function () {checkCorrect(this)};
    btn2.onclick = function () {checkCorrect(this)};
    btn3.onclick = function () {checkCorrect(this)};
    btn4.onclick = function () {checkCorrect(this)};

    if(count === 0){
        createQuestion("What is the fourth Elder Scrolls game?", "Arena" , "DaggerFall" , "Oblivion" , "Morrowind" , "Oblivion");
        correctOne = btn3;
    }else if(count === 1){
        createQuestion("Post Fallout 3, which Fallout game did Obsidian make?" , "Fallout New Vegas" , "Fallout 76" , "Fallout 4" , "Fallout Shelter" , "Fallout New Vegas");
        correctOne = btn1;
    }else if(count === 2){
        createQuestion("What school of magic is Shocking Touch in The Elder Scrolls?" , "Alteration" , "Destruction" , "Conjuration" , "Illusion" , "Destruction");
        correctOne = btn2;
    }else if(count === 3){
        createQuestion("What is the most powerful being ever?" , "Minecraft Steve" , "Fortnite Skin 73" , "Gamer Man" , "Donald Duck" , "Minecraft Steve");
        correctOne = btn1;
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + (count + 1) + " of " + numQuestions;
};

let checkCorrect = function (button) {
    if(button === correctOne){
        numRight++;
    }
    count++;
    DoTheStuff();
};
