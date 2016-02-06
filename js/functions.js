var playerOne = 0
var playerTwo = 0
var current = 0 // it shows whose turn it is
// 0 % 2 = 0
// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// whenever current % 2 equals to 0, then it's player1's turn, otherwise, it's player2's turn
var points
var colors = ['red', 'green', 'blue', 'yellow', 'orange']
// var red =("background-color", "red");
// var green = ("background-color", "green");
// var blue = ("background-color", "blue");
// var yellow = ("background-color", "yellow");
// var orange = ("background-color", "orange");
var santa = '<img class="santa" src="css/images/santa.jpg"/>'
var hankey = '<img class="hankey" src="css/images/hankey.jpg"/>'
var cartman = '<img class="cartman" src="css/images/cartman.jpg"/>'
var decoyWaldo = '<img class="decoyWaldo" src="css/images/decoyWaldo.jpg"/>'
var waldo = '<img class="waldo" src="css/images/waldo.jpg"/>'
var katyPerry = '<img class="katyPerry" src="css/images/katyPerry.jpg"/>'
var jesusSanta = '<img class="jesusSanta" src="css/images/jesusSanta.jpg"/>'
var theGrinch = '<img class="theGrinch" src="css/images/theGrinch.jpg"/>'
var jenniferLawrence = '<img class="jenniferLawrence" src="css/images/jenniferLawrence.jpg"/>'

var boxes = $('.box')

var pics = [santa, hankey, cartman, decoyWaldo, waldo, katyPerry, jesusSanta, theGrinch, jenniferLawrence]

// timer set to null so it takes no space
var timer = null

// var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
// var waldo = "div" + randomDiv;
// var divs = ['div1',  'div2',  'div3',  'div4',  'div5', 'div6', 'div7', 'div8', 'div9']

$('#score').text(playerOne)

$('#score2').text(playerTwo)

function shufflePics() {
	
			// FisherYates Shuffle algorithm
			function shuffleArray ( myArray ) {
	  			var i = myArray.length;
	  			if ( i == 0 ) return false;
	  			while ( --i ) {
	     			var j = Math.floor( Math.random() * ( i + 1 ) );
	     			var tempi = myArray[i];
	     			var tempj = myArray[j];
	     			myArray[i] = tempj;
	     			myArray[j] = tempi;
	  			}
			}
			
			// using FisherYates algorith to do mixed with a loop to randomly generate each image in a div
			shuffleArray(pics)
			
			for(var i = 0; i < boxes.length; i++) {

				boxes[i].innerHTML = pics[i];
			}
	}
		
		// set the loop to run the shuffle function less than a second
		var startGame = function() {
			timer = window.setInterval(shufflePics, 850)
		}

		$('button').click(startGame);


		function getWinner() {
			if(playerOne >= 10) {
				console.log('player one Wins')
				$('#head').text('Player One Wins')
				window.clearInterval(timer)
			}else if(playerTwo >= 10){
				console.log('player two wins')
				$('#head').text('Player Two Wins')
				window.clearInterval(timer)
			}else{

			}
		}
			//this determines who gets a point
 		$('.box').click(function(){
 			if ($(this).children().hasClass('waldo')){
 				if (current % 2 == 0) {
 					playerOne += 1
 					$('#score').text(playerOne)
 					getWinner()
 				} else {
 					playerTwo += 1
 					$('#score2').text(playerTwo)
 					getWinner()
  				}
 				
 				// switch turn
 			} else {
 				console.log("nope")
 				if (current % 2 == 0) {
 					current += 1
 				} else {
 					current += 1
 				}
 				// playerOne = playerTwo
 				// playerTwo += 1
 				// $('#score').text(playerTwo)
 				alert('Next Playa Turn')

 			}
 			
	})	




		// $(waldo).click(function(){
		// 	$(this).data('clicked', true)
		// });

		// if($(waldo).data('clicked')) {
		// 	i = 0
		// 	points = i++
		// 	console.log(points)
			

		// }

		
		// if(waldo === true) {
		// 	points = += i + 1
		// }else{
		// 	alert('You Suck!!')
		// }

			// $('.color').each(function(){
			// 	$(this).css('background-image', 'url("css/images/' + pics[Math.floor(Math.random()*pics.length)] + '.jpg")')
			
		// 	function wheresWaldo() {
		// 	var divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9']
		// 	var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		// 	var waldo = divs + randomDiv;
		// 	$(waldo).css('background-image', "url(css/images/waldo.jpg)")
		// 	console.log('works');
		// }

						// wheresWaldo();
		// })

		// function wheresWaldo() {
		// 	var divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9']
		// 	var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		// 	var waldo = divs + randomDiv;
		// 	$(waldo).css('background-image', "url(css/images/waldo.jpg)")
		// 	console.log('works');
		// }

		//next get pics into the divs after play button is clicked
// });
		
