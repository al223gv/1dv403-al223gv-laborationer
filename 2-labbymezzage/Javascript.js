"use strict";
var Motor = {

    messages: [],

    init: function() {

        var button = document.querySelector("#button");
        var inlagg = document.querySelector("#text_inlagg");
        var mess;

        button.addEventListener("click", buttonPress, false);

        inlagg.addEventListener("keydown", function(e) {
            if (13 == e.keyCode && !e.shiftKey) {
                e.preventDefault();
                buttonPress();
            }
        }, false);

        function buttonPress() {
            if (inlagg.value !== "") {
                mess = new Message(inlagg.value, new Date());

                Motor.messages.push(mess);

                Motor.renderMessages();
                inlagg.value = "";
            }
        }
    },
    renderMessages: function() {
        document.querySelector("#history-box").innerHTML = "";
        for (var i = 0; i < Motor.messages.length; i++) {
            Motor.renderMessage(i);
        }
        document.getElementById("uniqueMessage").innerHTML = "Antal Medelande " + i;
    },
    renderMessage: function(MessageID) {

        var history = document.querySelector("#history-box");
        var div = document.createElement("div");
        var para = document.createElement("p");
        var image_remove = document.createElement("img");
        var image_time = document.createElement("img");
        var paraTime = document.createElement("span");

        paraTime.classList.add("timePara");
        paraTime.innerHTML = "<br><br>" + Motor.messages[MessageID].getClock();

        image_remove.setAttribute("title", "Radera meddelandet");
        image_time.setAttribute("title", "När postades meddelandet");

        image_remove.src = "css/remove.png";
        image_time.src = "css/time.png";

        para.innerHTML = Motor.messages[MessageID].getHTMLText();


        history.appendChild(div);
        div.appendChild(para);
        div.appendChild(image_time);
        div.appendChild(image_remove);
        para.appendChild(paraTime);


        image_remove.addEventListener("click", function() {
            if (confirm("Vill du verkligen radera meddelandet?"))
                Motor.messages.splice(MessageID, 1);
            Motor.renderMessages();

        }, false);


        image_time.addEventListener("click", function() {
            alert(Motor.messages[MessageID].getDateText());
        }, false);


    }
};
window.addEventListener("load", Motor.init, false);