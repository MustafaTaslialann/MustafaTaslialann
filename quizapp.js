function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}


Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}


function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}


Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}


Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}


Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


var q1= new Question("EN İYİ PROGRAMLAMA DİLİ HANGİSİ?",["c#",
  "javascript","python","java","C++","asp.net"],"javascript");
  var q2=new  Question("En Çok İzlenen Spor?",["FUTBOL","BASKETBOL",
  "TENİS","VOLEYBOL","FORMULA","SATRANÇ"],"FUTBOL");
  var q3=new Question("En sevilen ders?",["MATEMATİK","BEDEN EĞİTİMİ",
 "MÜZİK","İNGİLİZCE","BOŞ DERS","TÜRKÇE"],"TÜRKÇE");
   var q4=new Question("En sevilen bilgisayar oyunu?",["league of legends",
"counter strike","pro evolotion soccer2013","fifa","call of duty","need for speed"],
"pro evolotion soccer2013");
 var q5=new Question("En sevilen Sanatçı?",["Selda Bağcan","Neşet Ertaş","Musa Eroğlu",
 "Aşık Veysel","Muazzez Ersoy","Zeki Müren"],"Neşet Ertaş");

var questions = [q1,q2,q3,q4,q5];


var quiz = new Quiz(questions);

loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        var question = quiz.getQuestion();
        var choices = question.choices;
        
        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            guess('btn'+i,choices[i]);
        }

        showProgress();
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
   var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

   document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;
    var html = 'Question '+ questionNumber + ' of ' + totalQuestion;

    if(totalQuestion === questionNumber){
        document.querySelector('#progress').innerHTML = "SINAV SONLANDI";
    }else{
        document.querySelector('#progress').innerHTML = html;
    }

  
}