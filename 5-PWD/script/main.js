"use strict";
var main = {

    init: function () {
        var folder = document.getElementById("folder-white");

        folder.addEventListener("click", main.newWindow, false);
    },
    newWindow: function () {

        //The window.
        var desktop = document.getElementById("wrapper");
        var windowWrapper = document.createElement("div");

        windowWrapper.style.backgroundColor = "#A3E0FF";
        windowWrapper.style.height = "700px";
        windowWrapper.style.width = "500px";
        windowWrapper.id = "newWindow";

        //The field above the window.
        var windowAboveField = document.createElement("div");
        var windowAboveName = document.createElement("p");
        var windowAboveCross = document.createElement("img");
        var windowAboveImage = document.createElement("img");

        windowAboveField.style.height = "50px";
        windowAboveField.style.width = "100%";
        windowAboveField.style.backgroundColor = "black";

        //The field below the window.
        var windowBelowField = document.createElement("div");
        var windowBelowImage = document.createElement("img");

        windowBelowField.style.height = "100%";
        windowBelowField.style.width = "50px";
        windowBelowField.style.position = "absolute";
        windowBelowField.style.bottom = "0px";
        windowBelowField.style.backgroundColor = "black";

        //Appending all parts.
        desktop.appendChild(windowWrapper);
        windowWrapper.appendChild(windowAboveField);
    }
};
window.addEventListener("load", main.init, false);