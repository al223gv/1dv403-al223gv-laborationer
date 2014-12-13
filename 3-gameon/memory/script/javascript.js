"use strict";

var Memory = {

    numberArray: [],
    imageArray: [],
    firstImageId: null,
    secondImageId: null,
    uniqueOne: null,
    uniqueTwo: null,
    click: 0,
    pairs: 0,
    tries: 0,
    index: null,

    init: function() {
        Memory.numberArray = RandomGenerator.getPictureArray(4, 4);

        for (var i = 0; i < Memory.numberArray.length; i += 1) {
            Memory.renderNewBoard(Memory.numberArray[i], i);
        }
    },

    renderNewBoard: function(id, i) {
        var index = i;
        var gameBox = document.querySelector("#gameBox");
        var button = document.createElement("button");
        var img = document.createElement("img");

        img.classList.add(id + ".png.png");
        img.id = index;
        img.setAttribute("src", "pics/0.png.png");
        button.id = "button" + index;

        button.setAttribute("tabindex", index + 1);

        gameBox.appendChild(button);
        button.appendChild(img);
        button.addEventListener("click", Memory.myfunc, false);
    },


    myfunc: function(evt) {
        evt.preventDefault();
        var img = evt.currentTarget.childNodes[0];
        if (Memory.firstImageId === null || Memory.secondImageId === null) {
            if (Memory.uniqueOne === null) {

                img.setAttribute("src", "pics/" + img.className);
                Memory.uniqueOne = img.id;
                Memory.firstImageId = img.className;
    
                document.getElementById("button" + img.id).removeEventListener('click', Memory.myfunc, false);
                return;
            }
            else if (Memory.uniqueTwo === null && Memory.uniqueOne !== img.id) {
                document.getElementById("button" + img.id).removeEventListener('click', Memory.myfunc, false);
                img.setAttribute("src", "pics/" + img.className);
                Memory.uniqueTwo = img.id;
                Memory.secondImageId = img.className;
            }

            if (Memory.secondImageId !== null && Memory.uniqueOne !== Memory.uniqueTwo && Memory.firstImageId === Memory.secondImageId) {

                Memory.pairs += 1;
                Memory.tries += 1;
                if (Memory.pairs === 8) {
                    console.log("grattis!");
                    document.getElementById("button"+img.id).blur();
                    Memory.firstImageId = null;
                    Memory.secondImageId = null;
                    Memory.uniqueOne = null;
                    Memory.uniqueTwo = null;
                    Memory.Pairs = 0;
                    var gameOverWrapper = document.querySelector("#gameOverWrapper");
                    var gameOver = document.querySelector("#gameOver");
                    var h1 = document.createElement("h1");
                    var p1 = document.createElement("p");
                    var button = document.createElement("button");
                    h1.innerHTML = "Grattis, du vann!";
                    p1.innerHTML = "Antal gissningar: " + Memory.tries;
                    button.innerHTML = "Spela igen?";
                    gameOverWrapper.classList.remove("hidden");
                    gameOver.classList.remove("hidden");

                    gameOver.appendChild(h1);
                    gameOver.appendChild(p1);
                    gameOver.appendChild(button);
                    button.focus();

                    button.addEventListener("click", function() {
                        var gameBox = document.getElementById("gameBox");
                        gameOver.innerHTML = "";
                        Memory.tries = 0;
                        Memory.pairs = 0;
                        gameOverWrapper.classList.add("hidden");
                        gameOver.classList.add("hidden");
                        gameBox.innerHTML = "";

                        Memory.init();
                    }, false);
                }

                else {
                    console.log("Grattis! Ett nytt par!");
                    Memory.firstImageId = null;
                    Memory.secondImageId = null;
                    Memory.uniqueOne = null;
                    Memory.uniqueTwo = null;
                }
            }
            else if (Memory.secondImageId !== null && Memory.uniqueOne !== Memory.uniqueTwo && Memory.firstImageId !== Memory.secondImageId) {

                setTimeout(function() {

                    document.getElementById(Memory.uniqueOne).src = "pics/0.png.png";
                    img.src = "pics/0.png.png";

                    document.getElementById("button" + Memory.uniqueTwo).addEventListener("click", Memory.myfunc, false);
                    document.getElementById("button" + Memory.uniqueOne).addEventListener('click', Memory.myfunc, false);

                    Memory.firstImageId = null;
                    Memory.secondImageId = null;
                    Memory.uniqueOne = null;
                    Memory.uniqueTwo = null;
                    Memory.tries += 1;

                }, 1000);
            }
        }
    }
};
window.addEventListener("load", Memory.init, false);