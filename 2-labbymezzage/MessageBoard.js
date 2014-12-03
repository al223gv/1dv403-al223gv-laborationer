"use strict";
var MessageBoard = {
    
    messages: [],
    
    init:function(mess){
        
        NodeList.prototype.forEach = Array.prototype.forEach;
        
        MessageBoard.messages.push(mess);
        
        for(var i = 0; i < MessageBoard.messages.length; i+=1 ){
            
        }
        
        
        
        if(MessageBoard.messages[1]){
            console.log(MessageBoard.messages[1].getText());
        }
        console.log(MessageBoard.messages[0].getDateText());
        console.log(MessageBoard.messages[0].getDate().getHours());
    }
    
};