"use strict";

var makePerson = function(persArr){
    
    var name;
    var names = [];
    var age;
    var ages = [];
    var maxValue;
    var minValue;
    var avgValue;
    var avg = 0;

    for(var i = 0; i < persArr.length; i+=1){
        
        age = persArr[i].age;
        ages.push(age);

        name = persArr[i].name;
        names.push(name);
    }
    names.sort(function(a, b){
        return a.localeCompare(b, "sv");
    });
    names = names.join(", ");
	
    maxValue = Math.max.apply(Math, ages);
    
	minValue = Math.min.apply(Math, ages);
    
    for(var i = 0; i < ages.length; i+=1){
        avg = avg + ages[i];
    }
    avgValue = Math.round(avg/ages.length);

    var result = {
        minAge : minValue,
        maxAge : maxValue,
        averageAge : avgValue,
        names: names
    };
    console.log(result);
    return result;
}