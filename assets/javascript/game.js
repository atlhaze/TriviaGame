$( document ).ready(function(){
	var time = [];

	$('#startStar').click(function() { 
		setTimeout(function() { ... }, 12000); });

	
	$('#startStar').on("click", function(){
		$('.game').show();
		$('.start').hide();
 };

//  setTimeout(function(){ alert("Hello"); }, 3000);

// var timeout;

// function timeout_trigger() {
//     $("#time").innerHTML = 'The timeout has been triggered';
// }


//  $("#start").click( function(){
//    var counter = 5;
//    setInterval(function() {
//      counter--;
//       if (counter >= 0) {
//          span = document.getElementById("count");
//          span.innerHTML = counter;
//       }
//       if (counter === 0) {
//          alert('sorry, out of time');
//          clearInterval(counter);
//        }
//      }, 1000);
// });
