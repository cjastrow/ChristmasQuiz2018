$("#startIt").on('mouseup',begin);

var music = document.getElementById('music');
var yay = document.getElementById("yay");
var aww = document.getElementById("aww");
music.volume = .5;

var score = 0;
var result = "";

function begin(){
	$("#topLeft").animate({top: '12.5px'}, 500);
	$("h3").html(" Select the &#34;Koala-madala-foo&#34; ");
	$("#startIt").animate({top: '1000px',opacity:'0'}, 1500);
	setTimeout(function(){
		$("#startIt").css('display', 'none');
		question1();
	}, 500);
	music.play();
	$("#snowman1").animate({opacity:'1'}, 100);
	$("#snowman2").animate({opacity:'1'}, 100);
	$("#snowflake1").css('display', 'inline-block');
	$("#snowflake2").css('display', 'inline-block');
	$("#snowflake3").css('display', 'inline-block');
	$("#snowflake4").css('display', 'inline-block');
}

$("#restart").click(function(){
	location.reload();
});

var result = document.getElementById("result");

result.addEventListener('click',goToNext);

function goToNext(){
	if(result == "next1"){
		$("#q1a1").animate({opacity:'0'}, 500);
		$("#q1a2").animate({opacity:'0'}, 500);
		$("#q1a3").animate({opacity:'0'}, 500);
		$("#q1a4").animate({opacity:'0'}, 500);
		$("#q1a1").css('display', 'none');
		$("#q1a2").css('display', 'none');
		$("#q1a3").css('display', 'none');
		$("#q1a4").css('display', 'none');

		$("#q2a1").css('display', 'inline-block');
		$("#q2a2").css('display', 'inline-block');
		$("#q2a3").css('display', 'inline-block');
		$("#q2a4").css('display', 'inline-block');
		$("#q2a1").animate({opacity:'1'}, 500);	
		$("#q2a2").animate({opacity:'1'}, 500);
		$("#q2a3").animate({opacity:'1'}, 500);
		$("#q2a4").animate({opacity:'1'}, 500);
		$("h3").html(" What is the secret passcode? ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next2"){
		$("#q2a1").animate({opacity:'0'}, 500);
		$("#q2a2").animate({opacity:'0'}, 500);
		$("#q2a3").animate({opacity:'0'}, 500);
		$("#q2a4").animate({opacity:'0'}, 500);
		$("#q2a1").css('display', 'none');
		$("#q2a2").css('display', 'none');
		$("#q2a3").css('display', 'none');
		$("#q2a4").css('display', 'none');

		$("#q3a1").css('display', 'inline-block');
		$("#q3a2").css('display', 'inline-block');
		$("#q3a3").css('display', 'inline-block');
		$("#q3a4").css('display', 'inline-block');
		$("#q3a1").animate({opacity:'1'}, 500);	
		$("#q3a2").animate({opacity:'1'}, 500);
		$("#q3a3").animate({opacity:'1'}, 500);
		$("#q3a4").animate({opacity:'1'}, 500);
		$("h3").html(" Don't call me a... ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next3"){
		$("#q3a1").animate({opacity:'0'}, 500);
		$("#q3a2").animate({opacity:'0'}, 500);
		$("#q3a3").animate({opacity:'0'}, 500);
		$("#q3a4").animate({opacity:'0'}, 500);
		$("#q3a1").css('display', 'none');
		$("#q3a2").css('display', 'none');
		$("#q3a3").css('display', 'none');
		$("#q3a4").css('display', 'none');

		$("#q4a1").css('display', 'inline-block');
		$("#q4a2").css('display', 'inline-block');
		$("#q4a3").css('display', 'inline-block');
		$("#q4a4").css('display', 'inline-block');
		$("#q4a1").animate({opacity:'1'}, 500);	
		$("#q4a2").animate({opacity:'1'}, 500);
		$("#q4a3").animate({opacity:'1'}, 500);
		$("#q4a4").animate({opacity:'1'}, 500);
		$("h3").html(" What's in the imaginary box? ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next4"){
		$("#q4a1").animate({opacity:'0'}, 500);
		$("#q4a2").animate({opacity:'0'}, 500);
		$("#q4a3").animate({opacity:'0'}, 500);
		$("#q4a4").animate({opacity:'0'}, 500);
		$("#q4a1").css('display', 'none');
		$("#q4a2").css('display', 'none');
		$("#q4a3").css('display', 'none');
		$("#q4a4").css('display', 'none');

		$("#q5a1").css('display', 'inline-block');
		$("#q5a2").css('display', 'inline-block');
		$("#q5a3").css('display', 'inline-block');
		$("#q5a4").css('display', 'inline-block');
		$("#q5a1").animate({opacity:'1'}, 500);	
		$("#q5a2").animate({opacity:'1'}, 500);
		$("#q5a3").animate({opacity:'1'}, 500);
		$("#q5a4").animate({opacity:'1'}, 500);
		$("h3").html(" Which of these is the 'Thanksgiving Weirdo?' ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next5"){
		$("#q5a1").animate({opacity:'0'}, 500);
		$("#q5a2").animate({opacity:'0'}, 500);
		$("#q5a3").animate({opacity:'0'}, 500);
		$("#q5a4").animate({opacity:'0'}, 500);
		$("#q5a1").css('display', 'none');
		$("#q5a2").css('display', 'none');
		$("#q5a3").css('display', 'none');
		$("#q5a4").css('display', 'none');

		$("#q6a1").css('display', 'inline-block');
		$("#q6a2").css('display', 'inline-block');
		$("#q6a3").css('display', 'inline-block');
		$("#q6a4").css('display', 'inline-block');
		$("#q6a1").animate({opacity:'1'}, 500);	
		$("#q6a2").animate({opacity:'1'}, 500);
		$("#q6a3").animate({opacity:'1'}, 500);
		$("#q6a4").animate({opacity:'1'}, 500);
		$("h3").html(" 'Star Wars, we just watch Star Wars, we don't _________________");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next6"){
		$("#q6a1").animate({opacity:'0'}, 500);
		$("#q6a2").animate({opacity:'0'}, 500);
		$("#q6a3").animate({opacity:'0'}, 500);
		$("#q6a4").animate({opacity:'0'}, 500);
		$("#q6a1").css('display', 'none');
		$("#q6a2").css('display', 'none');
		$("#q6a3").css('display', 'none');
		$("#q6a4").css('display', 'none');

		$("#q7a1").css('display', 'inline-block');
		$("#q7a2").css('display', 'inline-block');
		$("#q7a3").css('display', 'inline-block');
		$("#q7a4").css('display', 'inline-block');
		$("#q7a1").animate({opacity:'1'}, 500);	
		$("#q7a2").animate({opacity:'1'}, 500);
		$("#q7a3").animate({opacity:'1'}, 500);
		$("#q7a4").animate({opacity:'1'}, 500);
		$("h3").html(" Which of these images looks like Lady? ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next7"){
		$("#q7a1").animate({opacity:'0'}, 500);
		$("#q7a2").animate({opacity:'0'}, 500);
		$("#q7a3").animate({opacity:'0'}, 500);
		$("#q7a4").animate({opacity:'0'}, 500);
		$("#q7a1").css('display', 'none');
		$("#q7a2").css('display', 'none');
		$("#q7a3").css('display', 'none');
		$("#q7a4").css('display', 'none');

		$("#q8a1").css('display', 'inline-block');
		$("#q8a2").css('display', 'inline-block');
		$("#q8a3").css('display', 'inline-block');
		$("#q8a4").css('display', 'inline-block');
		$("#q8a1").animate({opacity:'1'}, 500);	
		$("#q8a2").animate({opacity:'1'}, 500);
		$("#q8a3").animate({opacity:'1'}, 500);
		$("#q8a4").animate({opacity:'1'}, 500);
		$("h3").html(" &#34;Oh look at the _______, I'm going to bed.&#34; ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next8"){
		$("#q8a1").animate({opacity:'0'}, 500);
		$("#q8a2").animate({opacity:'0'}, 500);
		$("#q8a3").animate({opacity:'0'}, 500);
		$("#q8a4").animate({opacity:'0'}, 500);
		$("#q8a1").css('display', 'none');
		$("#q8a2").css('display', 'none');
		$("#q8a3").css('display', 'none');
		$("#q8a4").css('display', 'none');

		$("#q9a1").css('display', 'inline-block');
		$("#q9a2").css('display', 'inline-block');
		$("#q9a3").css('display', 'inline-block');
		$("#q9a4").css('display', 'inline-block');
		$("#q9a1").animate({opacity:'1'}, 500);	
		$("#q9a2").animate({opacity:'1'}, 500);
		$("#q9a3").animate({opacity:'1'}, 500);
		$("#q9a4").animate({opacity:'1'}, 500);
		$("h3").html(" Dad's look-a-like ");
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
	if(result == "next9"){
		$("#q9a1").animate({opacity:'0'}, 500);
		$("#q9a2").animate({opacity:'0'}, 500);
		$("#q9a3").animate({opacity:'0'}, 500);
		$("#q9a4").animate({opacity:'0'}, 500);
		$("#q9a1").css('display', 'none');
		$("#q9a2").css('display', 'none');
		$("#q9a3").css('display', 'none');
		$("#q9a4").css('display', 'none');

		$("#q10a1").css('display', 'inline-block');
		$("#q10a2").css('display', 'inline-block');
		$("#q10a3").css('display', 'inline-block');
		$("#q10a4").css('display', 'inline-block');
		$("#q10a1").animate({opacity:'1'}, 500);	
		$("#q10a2").animate({opacity:'1'}, 500);
		$("#q10a3").animate({opacity:'1'}, 500);
		$("#q10a4").animate({opacity:'1'}, 500);
		$("h3").html(" What will never again be brought to Thanksgiving Dinner?<br>(FINAL QUESTION) ");
		$("#q10").css('marginTop','10px');
		$("#result").animate({opacity:'0'}, 500);
		setTimeout( function(){	;
			$("#result").removeClass("next");
		},500);
	}
}


// QUESTION ONE ---------------------------------------------------


function question1() {
	$("#q1a1").css('display', 'inline-block');
	$("#q1a2").css('display', 'inline-block');
	$("#q1a3").css('display', 'inline-block');
	$("#q1a4").css('display', 'inline-block');
	$("#q1a1").animate({opacity:'1'}, 500);
	$("#q1a2").animate({opacity:'1'}, 500);
	$("#q1a3").animate({opacity:'1'}, 500);
	$("#q1a4").animate({opacity:'1'}, 500);
}

var q1a2 = document.getElementById("q1a2");

q1a2.addEventListener('click',q1correct);

function q1correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q1a2.removeEventListener('click',q1correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q1a2").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q1a2").css('border','10px solid green');
	$("#q1a2").css('animation','none');
	$("#q1a2").css('box-shadow','none');
	$("#q1a2").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next1";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q1a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q1a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q1a1").css('display','none');
	},500);
});

$("#q1a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q1a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q1a3").css('display','none');
	},500);
});

$("#q1a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q1a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q1a4").css('display','none');
	},500);
});



// QUESTION TWO ---------------------------------------------------


function question2() {
	$("#q2a1").css('display', 'inline-block');
	$("#q2a2").css('display', 'inline-block');
	$("#q2a3").css('display', 'inline-block');
	$("#q2a4").css('display', 'inline-block');
	$("#q2a1").animate({opacity:'1'}, 500);
	$("#q2a2").animate({opacity:'1'}, 500);
	$("#q2a3").animate({opacity:'1'}, 500);
	$("#q2a4").animate({opacity:'1'}, 500);
}

var q2a3 = document.getElementById("q2a3");

q2a3.addEventListener('click',q2correct);

function q2correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q2a3.removeEventListener('click',q2correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#scoreKeep").html(score);
	$("#q2a3").css('z-index','10');
	$("#q2a3").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q2a3").css('background-color','green');
	$("#q2a3").css('animation','none');
	$("#q2a3").css('box-shadow','none');
	$("#q2a3").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next2";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q2a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q2a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q2a1").css('display','none');
	},500);
});

$("#q2a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q2a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q2a2").css('display','none');
	},500);
});

$("#q2a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q2a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q2a4").css('display','none');
	},500);
});


// QUESTION THREE ---------------------------------------------------


function question3() {
	$("#q3a1").css('display', 'inline-block');
	$("#q3a2").css('display', 'inline-block');
	$("#q3a3").css('display', 'inline-block');
	$("#q3a4").css('display', 'inline-block');
	$("#q3a1").animate({opacity:'1'}, 500);
	$("#q3a2").animate({opacity:'1'}, 500);
	$("#q3a3").animate({opacity:'1'}, 500);
	$("#q3a4").animate({opacity:'1'}, 500);
}

var q3a1 = document.getElementById("q3a1");

q3a1.addEventListener('click',q3correct);

function q3correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q3a1.removeEventListener('click',q3correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q3a1").css('z-index','10');
	$("#q3a1").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q3a1").css('background-color','green');
	$("#q3a1").css('animation','none');
	$("#q3a1").css('box-shadow','none');
	$("#q3a1").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next3";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q3a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q3a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q3a2").css('display','none');
	},500);
});

$("#q3a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q3a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q3a3").css('display','none');
	},500);
});

$("#q3a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q3a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q3a4").css('display','none');
	},500);
});


// QUESTION FOUR ---------------------------------------------------


function question4() {
	$("#q4a1").css('display', 'inline-block');
	$("#q4a2").css('display', 'inline-block');
	$("#q4a3").css('display', 'inline-block');
	$("#q4a4").css('display', 'inline-block');
	$("#q4a1").animate({opacity:'1'}, 500);
	$("#q4a2").animate({opacity:'1'}, 500);
	$("#q4a3").animate({opacity:'1'}, 500);
	$("#q4a4").animate({opacity:'1'}, 500);
}

var q4a3 = document.getElementById("q4a3");

q4a3.addEventListener('click',q4correct);

function q4correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q4a3.removeEventListener('click',q4correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q4a3").css('z-index','10');
	$("#q4a3").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q4a3").css('background-color','green');
	$("#q4a3").css('animation','none');
	$("#q4a3").css('box-shadow','none');
	$("#q4a3").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next4";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q4a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q4a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q4a1").css('display','none');
	},500);
});

$("#q4a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q4a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q4a2").css('display','none');
	},500);
});

$("#q4a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q4a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q4a4").css('display','none');
	},500);
});


// QUESTION FIVE ---------------------------------------------------


function question5() {
	$("#q5a1").css('display', 'inline-block');
	$("#q5a2").css('display', 'inline-block');
	$("#q5a3").css('display', 'inline-block');
	$("#q5a4").css('display', 'inline-block');
	$("#q5a1").animate({opacity:'1'}, 500);
	$("#q5a2").animate({opacity:'1'}, 500);
	$("#q5a3").animate({opacity:'1'}, 500);
	$("#q5a4").animate({opacity:'1'}, 500);
}

var q5a2 = document.getElementById("q5a2");

q5a2.addEventListener('click',q5correct);

function q5correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q5a2.removeEventListener('click',q5correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q5a2").css('z-index','10');
	$("#q5a2").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q5a2").css('background-color','green');
	$("#q5a2").css('animation','none');
	$("#q5a2").css('box-shadow','none');
	$("#q5a2").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next5";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q5a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q5a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q5a1").css('display','none');
	},500);
});

$("#q5a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q5a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q5a3").css('display','none');
	},500);
});

$("#q5a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q5a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q5a4").css('display','none');
	},500);
});


// QUESTION SIX ---------------------------------------------------


function question6() {
	$("#q6a1").css('display', 'inline-block');
	$("#q6a2").css('display', 'inline-block');
	$("#q6a3").css('display', 'inline-block');
	$("#q6a4").css('display', 'inline-block');
	$("#q6a1").animate({opacity:'1'}, 500);
	$("#q6a2").animate({opacity:'1'}, 500);
	$("#q6a3").animate({opacity:'1'}, 500);
	$("#q6a4").animate({opacity:'1'}, 500);
}

var q6a4 = document.getElementById("q6a4");

q6a4.addEventListener('click',q6correct);

function q6correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q6a4.removeEventListener('click',q6correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q6a4").css('z-index','10');
	$("#q6a4").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q6a4").css('background-color','green');
	$("#q6a4").css('animation','none');
	$("#q6a4").css('box-shadow','none');
	$("#q6a4").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next6";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q6a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q6a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q6a1").css('display','none');
	},500);
});

$("#q6a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q6a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q6a2").css('display','none');
	},500);
});

$("#q6a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q6a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q6a3").css('display','none');
	},500);
});


// QUESTION SEVEN ---------------------------------------------------


function question7() {
	$("#q7a1").css('display', 'inline-block');
	$("#q7a2").css('display', 'inline-block');
	$("#q7a3").css('display', 'inline-block');
	$("#q7a4").css('display', 'inline-block');
	$("#q7a1").animate({opacity:'1'}, 500);
	$("#q7a2").animate({opacity:'1'}, 500);
	$("#q7a3").animate({opacity:'1'}, 500);
	$("#q7a4").animate({opacity:'1'}, 500);
}

var q7a1 = document.getElementById("q7a1");

q7a1.addEventListener('click',q7correct);

function q7correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q7a1.removeEventListener('click',q7correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q7a1").css('z-index','10');
	$("#q7a1").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q7a1").css('background-color','green');
	$("#q7a1").css('animation','none');
	$("#q7a1").css('box-shadow','none');
	$("#q7a1").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next7";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q7a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q7a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q7a2").css('display','none');
	},500);
});

$("#q7a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q7a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q7a3").css('display','none');
	},500);
});

$("#q7a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q7a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q7a4").css('display','none');
	},500);
});


// QUESTION EIGHT ---------------------------------------------------


function question8() {
	$("#q8a1").css('display', 'inline-block');
	$("#q8a2").css('display', 'inline-block');
	$("#q8a3").css('display', 'inline-block');
	$("#q8a4").css('display', 'inline-block');
	$("#q8a1").animate({opacity:'1'}, 500);
	$("#q8a2").animate({opacity:'1'}, 500);
	$("#q8a3").animate({opacity:'1'}, 500);
	$("#q8a4").animate({opacity:'1'}, 500);
}

var q8a4 = document.getElementById("q8a4");

q8a4.addEventListener('click',q8correct);

function q8correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q8a4.removeEventListener('click',q8correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q8a4").css('z-index','10');
	$("#q8a4").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q8a4").css('background-color','green');
	$("#q8a4").css('animation','none');
	$("#q8a4").css('box-shadow','none');
	$("#q8a4").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next8";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q8a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q8a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q8a1").css('display','none');
	},500);
});

$("#q8a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q8a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q8a2").css('display','none');
	},500);
});

$("#q8a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q8a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q8a3").css('display','none');
	},500);
});


// QUESTION NINE ---------------------------------------------------


function question9() {
	$("#q9a1").css('display', 'inline-block');
	$("#q9a2").css('display', 'inline-block');
	$("#q9a3").css('display', 'inline-block');
	$("#q9a4").css('display', 'inline-block');
	$("#q9a1").animate({opacity:'1'}, 500);
	$("#q9a2").animate({opacity:'1'}, 500);
	$("#q9a3").animate({opacity:'1'}, 500);
	$("#q9a4").animate({opacity:'1'}, 500);
}

var q9a3 = document.getElementById("q9a3");

q9a3.addEventListener('click',q9correct);

function q9correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q9a3.removeEventListener('click',q9correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q9a3").css('z-index','10');
	$("#q9a3").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q9a3").css('background-color','green');
	$("#q9a3").css('animation','none');
	$("#q9a3").css('box-shadow','none');
	$("#q9a3").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		$("#result").removeClass("correct");
		$("#result").addClass("next");
		$("#result").html("Next Question");
		result = "next9";
		$("#result").animate({opacity:'1'}, 500);
	},2000);
};

$("#q9a1").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q9a1").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q9a1").css('display','none');
	},500);
});

$("#q9a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q9a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q9a2").css('display','none');
	},500);
});

$("#q9a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q9a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q9a4").css('display','none');
	},500);
});


// QUESTION TEN ---------------------------------------------------


function question10() {
	$("#q10a1").css('display', 'inline-block');
	$("#q10a2").css('display', 'inline-block');
	$("#q10a3").css('display', 'inline-block');
	$("#q10a4").css('display', 'inline-block');
	$("#q10a1").animate({opacity:'1'}, 500);
	$("#q10a2").animate({opacity:'1'}, 500);
	$("#q10a3").animate({opacity:'1'}, 500);
	$("#q10a4").animate({opacity:'1'}, 500);
}

var q10a1 = document.getElementById("q10a1");

q10a1.addEventListener('click',q10correct);

function q10correct(){
	$("#scoreBox").css({backgroundColor: 'green'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	q10a1.removeEventListener('click',q10correct);
	score += 200;
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("+200");
	$("#scoreEffect").css('color','green');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q10a1").css('z-index','10');
	$("#q10a1").animate({width:'310px',height:'310px',left:'2.5px',top:'2.5px'}, 500);
	$("#q10a1").css('background-color','green');
	$("#q10a1").css('animation','none');
	$("#q10a1").css('box-shadow','none');
	$("#q10a1").css('cursor','not-allowed');

	$("#result").addClass("correct");
	$("#result").html("Correct!");
	yay.play();
	$("#result").css('display','block');
	$("#result").animate({opacity:'1'}, 500);
	$("#result").delay(1000).animate({opacity:'0'}, 500);
	setTimeout( function(){	
		endGame();
	},1000);
};

$("#q10a2").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q10a2").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q10a2").css('display','none');
	},500);
});

$("#q10a3").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0000;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q10a3").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q10a3").css('display','none');
	},500);
});

$("#q10a4").click(function(){
	$("#scoreBox").css({backgroundColor: 'red'},500);
	setTimeout( function(){	
		$("#scoreBox").css({backgroundColor: 'white'},500);
	},500);
	score -= 50;
	if(score < 0){
		score = 0;
	}
	$("#scoreKeep").html(score);
	$("#scoreEffect").html("-50");
	aww.play();
	$("#scoreEffect").css('color','red');
	$("#scoreEffect").animate({left:'320px'},300);	
	$("#scoreEffect").animate({opacity:'0'},800);
	$("#scoreEffect").animate({left:'220px'},300);	
	$("#scoreEffect").animate({opacity:'1'},800);
	$("#q10a4").animate({opacity:'0'},500);
	setTimeout( function(){	
		$("#q10a4").css('display','none');
	},500);
});

function endGame(){
	$("#q10a1").animate({opacity:'0'}, 500);
	$("#q10a2").animate({opacity:'0'}, 500);
	$("#q10a3").animate({opacity:'0'}, 500);
	$("#q10a4").animate({opacity:'0'}, 500);
	$("#q10a1").css('display', 'none');
	$("#q10a2").css('display', 'none');
	$("#q10a3").css('display', 'none');
	$("#q10a4").css('display', 'none');
	$("h3").html(" Quiz End ");
	setTimeout( function(){	
		alert("Final score: " + score);
	},500);
}