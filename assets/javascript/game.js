var intervalId;
var timeLeft = 120 ;

var numCorrect = 0;
var numAnswered  = 0;
var numUnanswered = 0;


$( document ).ready(function(){

	$('.game').hide();
	$('#questions').hide();
	$('#gameOver').hide();

	$('#startStar').click(function(){

    	startGame(); 
    	runClock();

    });


	// $('#questions').change(function () {

	// 	checkState();

 //  	})


	$('#questions').change(function () {

	    var numCorrect = 0;
	    var numAnswered  = 0;

	    $("input:checked").each(function() {

 
	      var isChecked = this.checked;
	 	  var correct = this.value === "yes"? true : false;
		
	      if (correct){
	      	numCorrect++;
	      };

	     numAnswered++;
	    if (numAnswered === 8){
	    	endGame(numCorrect)
	    }

	    });
  	})

});	


function runClock(){

	timeLeft = 120 ;

	clearInterval(intervalId);
	intervalId = setInterval(function(){ 
		var minutes = parseInt(timeLeft / 60);
		var seconds = parseInt(timeLeft % 60);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		$('#time').html(minutes + ":" + seconds);

		if (--timeLeft < 0){
			clearInterval(intervalId);
			endGame(checkState());
			};
		}, 1000);

};

function checkState(){

	    $("input:checked").each(function() {

	      var isChecked = this.checked;
	 	  var correct = this.value === "yes"? true : false;
		
	      if (correct){
	      	numCorrect++;
	      };

	     numAnswered++;
	    if (numAnswered === 8){
	    	endGame(numCorrect)
	    }


	    });
	    return numCorrect;

};

function startGame(){
	
	$('.start').hide();
	$('.game').show();
	$('#questions').show();

};


function endGame(numCorrect){


	$('#questions').hide();
	$('#gameOver').show();

	$('#totalAnswersCorrect').html("Total Correct:" + " " + numCorrect);
	$('#totalAnswersIncorrect').html("Total Incorrect:" + (8 - numCorrect));

	clearInterval(intervalId);


};
