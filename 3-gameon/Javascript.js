"use strict";

var Memory = {

    numberArray: [],
    firstImageId: null,
    secondImageId: null,
    uniqueOne: null,
    uniqueTwo: null,
    click: 0,
    Pairs: 0,

    init: function() {
        Memory.numberArray = RandomGenerator.getPictureArray(4, 4);

        for (var i = 0; i < Memory.numberArray.length; i += 1) {
            Memory.renderNewBoard(Memory.numberArray[i], i);
        }
    },

    renderNewBoard: function(id, index) {
        var gameBox = document.querySelector("#gameBox");
        var a = document.createElement("a");
        var img = document.createElement("img");

        img.classList.add("img." + id);
        img.setAttribute("src", "memory/pics/0.png.png");

        gameBox.appendChild(a);
        a.appendChild(img);

        a.addEventListener("click", function() {
            if (Memory.firstImageId === null || Memory.secondImageId === null && Memory.uniqueOne !== index) {
                img.setAttribute("src", "memory/pics/" + id + ".png.png");

                if (Memory.firstImageId === null) {
                    Memory.firstImageId = id;
                    Memory.uniqueOne = index;
                    console.log(Memory.firstImageId);
                    return;
                }
                else if (Memory.secondImageId === null) {
                    Memory.secondImageId = id;
                    Memory.uniqueTwo = index;
                    console.log(Memory.secondImageId);

                    if (Memory.firstImageId !== null && Memory.firstImageId !== null && Memory.firstImageId === Memory.secondImageId) {
                        console.log("grattis");
                        Memory.Pairs += 1;
                        if (Memory.Pairs === 8) {
                            document.write("gratz, man!");
                        }
                        else {
                            Memory.firstImageId = null;
                            Memory.secondImageId = null;
                            Memory.uniqueOne = null;
                            Memory.uniqueTwo = null;
                        }
                    }
                    else if (Memory.firstImageId !== null && Memory.firstImageId !== null && Memory.firstImageId !== Memory.secondImageId) {
                        setTimeout(function() {
                            document.getElementsByClassName("img." + Memory.firstImageId)[0].src = "memory/pics/0.png.png";
                            document.getElementsByClassName("img." + Memory.firstImageId)[1].src = "memory/pics/0.png.png";
                            document.getElementsByClassName("img." + Memory.secondImageId)[0].src = "memory/pics/0.png.png";
                            document.getElementsByClassName("img." + Memory.secondImageId)[1].src = "memory/pics/0.png.png";
                            Memory.firstImageId = null;
                            Memory.secondImageId = null;
                            Memory.uniqueOne = null;
                            Memory.uniqueTwo = null;
                        }, 1000);
                    }
                }
            }
        }, false);
    },
    checkTile: function(id) {

    }
};
window.addEventListener("load", Memory.init, false);