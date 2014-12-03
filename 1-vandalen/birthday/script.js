"use strict";

window.onload = function(){
	
	var birthday = function(date){
		
		var dateOfToday = new Date();
		var userBirthday = new Date(date);
			
		function getDaysUntilNextBirthday(){
				
			if( isNaN(userBirthday) || userBirthday.getTime() > dateOfToday.getTime()){
				throw new Error("Du har inte matat in ett korrekt datum.");
			}
			
			userBirthday.setFullYear(dateOfToday.getFullYear());
				
			var differenceBetweenDates = Math.ceil((userBirthday.getTime() - dateOfToday.getTime()) / 1000 / 60 / 60 / 24);
			
			if(differenceBetweenDates === 0){
				return 0;
			}
			else if(differenceBetweenDates < 0){
				return differenceBetweenDates + 365;
			}
			else if(differenceBetweenDates > 0){
				return differenceBetweenDates;
			}
		}
		return getDaysUntilNextBirthday();
	};
	// ------------------------------------------------------------------------------

	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			console.log(answer);
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};