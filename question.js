window.onload = function () {
	$("#button1").click();
	$("#button2").click();
};

var time = 75;


var quiz = [
    {
        questionA: "Commonly used data types DO NOT include:",
		choicesA:["strings", "booleans", "alerts", "numbers"],
		AnswerA: "alerts"
    },
    
    {

		question2: "The condition in an if / else statement is enclosed within ____.",
		choices2:["quotes", "curly brackets", "parentheses", "square brackets"],
		Answer2: "parenthesests"
    }
    
    ];





	function run () {
		intervalId = setInterval(decrement, 1000);
	}
	function decrement() {
		time--;
		$("#numQuestion").html("<h2>" + time + "</h2>");
		if (time === 0) {
			alert("Time Up! Next Question");
			return;
		}
	}
	run();