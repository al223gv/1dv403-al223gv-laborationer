"use strict";

var quiz = {

    countQuestion: 0,

    countTries: 0,

    countAll: 0,

    answerObj: {},

    quizObj: undefined,

    url: 'http://vhost3.lnu.se:20080/question/1',

    answerURL: null,

    xhr: new XMLHttpRequest(),

    init: function() {
        console.log(quiz.url);
        if (quiz.url !== undefined) {
            quiz.countQuestion += 1;
            quiz.question();
        }
        else {
            document.getElementById("button").removeEventListener("click", quiz.answer);
            var hej = document.getElementById("result");
            var paragraph = document.createElement("p");

            paragraph.innerHTML = "Antal gissningar: " + quiz.countAll + "<br>Antal Frågor: " + quiz.countQuestion;

            hej.classList.remove("hidden");

            hej.appendChild(paragraph);
        }
    },

    question: function() {

        var para = document.getElementById("question");

        quiz.xhr.onreadystatechange = function() {

            if (quiz.xhr.readyState === 4 && quiz.xhr.status === 200) {
                quiz.quizObj = JSON.parse(quiz.xhr.responseText);
                console.log(quiz.quizObj);
                quiz.answerURL = quiz.quizObj.nextURL;

                para.innerHTML = quiz.quizObj.question;
            }
        };

        quiz.xhr.open("GET", quiz.url, true);

        quiz.xhr.send(null);
    },

    activateButton: function() {
        var button = document.getElementById("button");

        button.addEventListener("click", quiz.answer, false);

    },

    answer: function() {

        quiz.answerObj.answer = document.getElementById("answer").value;

        console.log(quiz.answerObj);

        quiz.xhr = new XMLHttpRequest();

        quiz.xhr.onreadystatechange = function() {

            if (quiz.xhr.readyState === 4 && quiz.xhr.status === 200) {
                quiz.countTries += 1;
                quiz.countAll += 1;
                quiz.quizObj = JSON.parse(quiz.xhr.responseText);
                quiz.url = quiz.quizObj.nextURL;
                console.log(quiz.url);
                document.getElementById("message").innerHTML = quiz.quizObj.message;

                var result = document.getElementById("result");
                var paragraph = document.createElement("p");

                paragraph.innerHTML = "Fråga " + quiz.countQuestion + ": " + quiz.countTries;

                result.appendChild(paragraph);

                quiz.countTries = 0;

                quiz.init();
            }
            else if (quiz.xhr.readyState === 4 && quiz.xhr.status === 400) {

                quiz.countTries += 1;
                quiz.countAll += 1;

                var wrong = JSON.parse(quiz.xhr.responseText);

                document.getElementById("message").innerHTML = wrong.message;
            }
        };
        quiz.xhr.open('POST', quiz.answerURL, true);
        quiz.xhr.setRequestHeader('Content-Type', 'application/json');
        quiz.xhr.send(JSON.stringify(quiz.answerObj));
    }
};
window.addEventListener("load", quiz.activateButton, false);
window.addEventListener("load", quiz.init, false);