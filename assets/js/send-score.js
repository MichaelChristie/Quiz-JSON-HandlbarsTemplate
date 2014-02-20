//
//
// ***** Score submission function  *****
//
//
function mySiteQuizSubmit(score, quizid, userid, rootURL)
{
	$.ajax({
     url: rootURL + "/quiz/set",
     // url:"http://localhost:3000/quiz/set",
     // url: url,
     dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
     data: {quizid: quizid, userid: userid, score: score},
     success:function(json){
         // do stuff with json (in this case an array)
         // console.log(json); 	
         // console.log(json.highscore);
         //outputHTML = "(Highest score so far: " + json.highscore + "%)" ;
         // if (score > json.highscore){
         // 	outputHTML = "(That's your highest score so far!)";
         // } 
        // $('#highscore').html(outputHTML);
     },
     error:function(json){
         // console.log(json);
     }
	});


}