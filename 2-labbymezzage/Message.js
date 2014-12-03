"use strict";
function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    this.setDate = function(_date){
        date = _date;
    };
    Message.prototype.getClock = function(){
        var h = this.getDate().getHours();
        var m = this.getDate().getMinutes();
        var s = this.getDate().getSeconds();
        
        if(this.getDate().getHours() < 10){
            h = "0" + this.getDate().getHours();
        }
        else{
            h = this.getDate().getHours();
        }
        if(this.getDate().getMinutes() < 10){
            m = "0" + this.getDate().getMinutes();
        }
        else{
            m = this.getDate().getMinutes();
        }
        if(this.getDate().getSeconds() < 10){
            s = "0" + this.getDate().getSeconds();
        }
        else{
            s = this.getDate().getSeconds();
        }
        return h + ":" + m + ":" + s;
    };
    
    Message.prototype.toString = function(){
        return this.getText()+"  ("+this.getDate()+")";
    };
    
    Message.prototype.getHTMLText = function(){
        return this.getText().replace(/[\n\r]/g, "<br>");
    };
    
    Message.prototype.getDateText = function(){
        var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    
    return "Inlägget skapades den " + this.getDate().getDate() + " " + monthNames[this.getDate().getMonth()] + 
        " " + this.getDate().getFullYear() + " klockan " + this.getClock();
    };
}