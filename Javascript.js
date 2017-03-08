
function newQuote(){

    // storing quotes into an array
	var arr = ["Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. - Marilyn Monroe",

	"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.-Albert Einstein",
	"It is our choices, Harry, that show what we truly are, far more than our abilities - J.K. Rowling, Harry Potter and the Chamber of Secrets",
	"As he read, I fell in love the way you fall asleep: slowly, and then all at once. - John Green, The Fault in Our Stars",
	"It does not do to dwell on dreams and forget to live. - J.K. Rowling, Harry Potter and the Sorcerer's Stone" ,
	"Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
	"Life is what happens to us while we are making other plans.- Allen Saunders ",
	"The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare, As You Like It",
	"We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde, Lady Windermere's Fan",
	"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten. - Neil Gaiman, Coraline",
	"If you don't stand for something you will fall for anything. - Gordon A. Eadie",
	"I may not have gone where I intended to go, but I think I have ended up where I needed to be. - Douglas Adams, The Long Dark Tea-Time of the Soul"

	]
	
	
	// generating random number with in the length of the above array
	var	n = Math.floor(Math.random()*arr.length);
	// assigning random number to quotedisplay id 
	document.getElementById('quoteDisplay').innerHTML = arr[n];

	// adding quotes to twitter intent text
	$(".twitter-share-button").click(function(){
	    $(this).attr("href", 'https://twitter.com/intent/tweet?text='+arr[n]);
	  });


}






