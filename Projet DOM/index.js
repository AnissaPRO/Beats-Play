var bg = document.getElementById('particles-js');
	
document.addEventListener("keydown",function(event){
		bg.style.backgroundColor = getRandomColors();
		var key = event.key;
		playMusic(key);
		console.log(event);
		});

function getRandomColors(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0;i<6;i++) {	
		color = color+letters[Math.floor(Math.random()*16)];	
	}
	return color;
}

function playMusic(key) {
	switch(key) {
		case "d" :
		var audio = new Audio("kick.mp3");
		audio.play();
		break;
		case "z" :
		var audio = new Audio("kick2.mp3");
		audio.play();
		break;
		case "q" :
		var audio = new Audio("Kick1.wav");
		audio.play();
		break;
		case "e" :
		var audio = new Audio("Clap1.wav");
		audio.play();
		break;
	}
	
}