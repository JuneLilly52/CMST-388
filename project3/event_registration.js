/*
		Your Name: <Regina Goldfarb>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <The purpose of this file is to create an interactive elements so that users can buy tickets for an event>
*/
// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

var x = 0;

window.onload = function() {

	/*** YOUR CODE STARTS BELOW HERE ***/
	//timer here for ten minutes
	//displays minutes and seconds left, must show a full digital display ex; 12:34; updates as each second elapses
	//clear interval and display alert that timer is expired and send back to homepage
	x = setInterval(function(){
		var timer = document.getElementById("timer");
		var min_sec = timer.textContent.split(":");

		if (parseInt(min_sec[1]) === 0){
			
			if (parseInt(min_sec[0]) === 0){
				//timer expired
				clearInterval(x);
				alert("Your time has run out...");
				location.assign("event_registration.html");
			}
			else {
				min_sec[1] = 59;
				min_sec[0] = min_sec[0] - 1;
			}
			
		}
		else {
			min_sec[1] = min_sec[1]-1;

		}
		if (min_sec[0]<10){
			min_sec[0] ="0" + parseInt(min_sec[0]);
		}
		if (min_sec[1]<10){
			min_sec[1] = "0" + parseInt(min_sec[1]);
		}
		timer.textContent = min_sec[0] + ":" + min_sec[1];
	}, 1000);
};

function calculateTotal(){

	var numTickets = document.getElementById("numTickets");
	var msgTickets = document.getElementById("msgTickets");
	var contactInformation = document.getElementById("contactInformation");
	if (numTickets.value < minTickets || numTickets.value > maxTickets || isNaN(numTickets.value)){
		msgTickets.textContent= "Error, you can only purchase up to three tickets"
		numTickets.style.backgroundColor = 'red';
		contactInformation.style.display = "none";
		
	}
	else {
		numTickets.style.backgroundColor = 'white';
		msgTickets.textContent="";
		var cost = (numTickets.value * costPerTicket) + ticketSurcharge;
		var totalCost = document.getElementById("totalCost");
		totalCost.value = "$"+ cost.toFixed(2);
		contactInformation.style.display = "block";
	}	
}
function completePurchase(){
	var email = document.getElementById("email");
	var name = document.getElementById("name");
	var msgname = document.getElementById("msgname");
	var msgemail = document.getElementById("msgemail");
	if (email.value === ''){
		msgemail.textContent= "No email provided";
		email.style.backgroundColor = "red";
	}
	else {
		email.style.backgroundColor="white";
		msgemail.textContent="";
	}

	if (name.value === ''){
		msgname.textContent = "No name provided";
		name.style.backgroundColor = "red"
	}
	else{
		name.style.backgroundColor="white";
		msgname.textContent="";
	}
	if(name.value != "" && email.value!= ""){
		clearInterval(x);
		alert("Thank you for your purchase! Your total cost today is " + document.getElementById("totalCost").value);
	}
}
  