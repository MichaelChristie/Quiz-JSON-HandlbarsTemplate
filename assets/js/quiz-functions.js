$(function()
{

    // *** get parameters ***

    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }
    // *** get quiz and user id ***
    var quizId = GetURLParameter('quizid');
    var userId = GetURLParameter('userid');
    // var attempts = GetURLParameter('attempts');
    var rootURL = GetURLParameter('rooturl');
    
    //
    // ***** Control progress bar *****
    //
    function updateProgress(percentage)
    {
        // Set progress bar's width and update text to the correct percentage
        $('.quiz-progress').css('width', '' + percentage + '%');
        $('.quiz-progress_text').html('' + percentage + '% Complete');
    }

    //
    //
    // ***** Reset progress bar *****
    //
    //

    updateProgress(0);

    //
    //
    // ***** Prevent any form elements from submitting *****
    //
    //
    $('form').submit(function(){ return false; });

    //Make the submit button for the current step has a function which when clicked:

    //Updates the progress Bar with (Questions Answered) / total questions 

    //Hide  current 'Step' and shows the next step.

    var step_count = data.sections[0].questions.length;
    //Make a loop to traverse thru all items

    $('input[type="submit"]').click(function(e) {

        //prevent default link behaviour
        e.preventDefault();

//console.log("button clicked " + this.id);
        next_step(this.id.split('_')[1]);
    });

    $(':radio').click(function(e) {

        //prevent default link behaviour
        //e.preventDefault();
        //disable_next_button(this.id.substring(3));

        var question_number = this.name.substring(3);
        var next_button = "submit_" + question_number;
//console.log("next button:" + next_button);
//console.log("radio clicked " + this.name);
        $("#" + next_button).removeClass('quiz-button-disabled');
        $("#" + next_button).removeAttr('disabled');
    });

    // function disable_next_button(step_id) {
    //     $(step_id).removeClass('quiz-button-disabled');
    //     $(step_id).removeAttr('disabled');
    // };

    function next_step(current_step) {
//console.log("Next step: " + current_step);
//console.log("current step_count = " + step_count);
        var progress = Math.round(current_step * (100 / step_count));
        // Show your progress
        updateProgress(progress);
        $('#step-'+current_step).fadeOut('fast');
        
        if(current_step < step_count) {
            // Remove screen 1, show screen 2
            var t = window.setTimeout(function(){
                $('#step-'+(eval(current_step)+1)).fadeIn('slow');
            }, 200);
//console.log("Showing: " + '#step-'+(eval(current_step)+1));
        } else {
//console.log("Doing final step");
            final_step();
        }
    }




    function final_step() {

        // Create a array to store the user's answers, for comparison with the JSON
        var userAnswers = new Array();
        // Select all radio buttons the user could click to answer
        var userAnswerRadioButtons = $('#quiz-container input[type=radio]:checked');
//console.log('userAnswerRadioButtons' + userAnswerRadioButtons);

//console.log('userAnswerRadioButtons.length: ' + userAnswerRadioButtons.length);
 
        // Variables to temporarily store each answer ID and answer
        var answerID;
        var userResponse;

        // Loop through them
        for (var i = 0; i < userAnswerRadioButtons.length; i++) {
            qNum = $(userAnswerRadioButtons[i]).attr('data-question');
            userResponse = $(userAnswerRadioButtons[i]).attr('value');

            qID = $(userAnswerRadioButtons[i]).attr('id');
            console.log('#review-zone #' + qID);

            //Check the item has the class 'correctanswer'

            if($('#review-zone #' + qID).next().hasClass('correct')) {
                console.log('user was correct ' + qID);
                $('#review-zone #' + qID).next().addClass('correctanswer');
                $('#review-zone #' + qID).closest('.feedback_message_correct').addClass('show');
            }
            else {
                $('#review-zone #' + qID).next().addClass('useranswer');
                console.log('user was incorrect ' + qID);
                $('#review-zone #' + qID).closest('.feedback_message_incorrect').addClass('show');
            }

//console.log( answerID + ": " + userResponse); 
            // Add to the answers array
            userAnswers.push({qNum:qNum, userResponse:userResponse});
        }
//console.log(userAnswers);

        // Set up a counter to count the total number of answers there can be (found by number of properties in the JSON object)
        // You need this to calculate final score percentage
        var totalAnswers = 0;

        // Same again to track the number of correct answers given
        var correctAnswers = 0;
//console.log('bingo');
        for (i in userAnswers){
            var answerInfo = userAnswers[i];
            totalAnswers++;
            correctAnswer = 'None';
            var question = data.sections[0].questions[answerInfo.qNum-1];
//console.log(question);
            for (i in question.answers){
//console.log('a');
                var answer = question.answers[i];
//console.log('b');
                if (answer.correct){
//console.log('c');
                    correctAnswer = answer.option;
                }
            }
//console.log('answer = ' + answerInfo.userResponse + ' correct answer is ' + correctAnswer);
            if (correctAnswer == answerInfo.userResponse){
                correctAnswers++;
            };
        };

        if (false){

        // Loop through the JSON object
        for (var JSONanswerID in JSONanswers) {



            // Check the property exists
            if (JSONanswers.hasOwnProperty(JSONanswerID)) {

                // It does, you've found an answer
                totalAnswers++;

                // For this correct answer ID, loop through the user answers array 
                // and see if the user clicked a radio button with a matching ID
                for (var j = 0; j < userAnswers.length; j++) {
//console.log( userAnswers[j].answerID + ": " + userResponse); 
                    // Have you found an answer ID in the user answers array that matches this JSON answer ID?
                    if (userAnswers[j].answerID === JSONanswerID) {

                        // Yes, so now check if the answer the user gave was correct
                        if (userAnswers[j].userResponse === JSONanswers[JSONanswerID]) {

                            // Count a correct answer, wahey!!!
                            correctAnswers++;

                        }

                        // Answer found, break this loop
                        break;

                    }

                }

            }

        }
    }

        // You now know how many answer there are and how many you got right, so turn that into a percentage
        var percentageCorrect = Math.round((correctAnswers / totalAnswers) * 100);
        var scoreHTML = "";
        var reviewHTML = "<p><a data-toggle='modal' href='#myModal' id='launchModal1' class='btn btn-primary btn-lge'>Review Questions and Answers</a></p>"

        // Pass mark is 70% - show pass or fail message
        if (percentageCorrect >= 70) {

            // Set pass title and score message
            scoreHTML = "<h1 class=\"scoreHeader\">You scored <span>" + percentageCorrect + "%</span>  ";
            scoreHTML = scoreHTML + "<span class=\"medium\" id=\"highscore\">(" + correctAnswers + "/" + totalAnswers + ")</span> <span id=\"highscore\"></span></h1>" + reviewHTML;
            $('#quiz-results-text').html(scoreHTML);
            // $('#quiz-attempts-text').html("<h2>YOUR SCORE HAS BEEN RECORDED</h2>");

            // Submit score (pass)
            // MySiteQuizSubmit(percentageCorrect, true);
            // mySiteQuizSubmit(percentageCorrect, true, quizId, userId);

            // You've passed, so no need to show the Try Again button
            $('#quiz-retry-button').hide();

        } else {

            // mySiteQuizSubmit(percentageCorrect, false, quizId, userId);

            // Set failure title and score message
            //$('#quiz-results-message').html('So close!    ');
            //$('#quiz-results-text').html("You scored " + percentageCorrect + "%");
            scoreHTML = "<h1 class=\"scoreHeader\">You scored " + percentageCorrect + "%  "; 
            scoreHTML = scoreHTML + "<span class=\"medium\">(" + correctAnswers + "/" + totalAnswers + ")</span></h1>" + reviewHTML;
            $('#quiz-results-text').html(scoreHTML);
            // $('#quiz-attempts-text').html("<h2>YOU HAVE 2 ATTEMPTS LEFT</h2>");
            //$('#quiz-results-text').html("<h4>You scored " + percentageCorrect + "%</h3>");
            //$('#quiz-attempts-text').html("<h3>You have 3 attempts remaining</h4>");  
//console.log('Some message');

            // Submit score (fail)

            // Make sure the Try Again button is visible
            $('#quiz-retry-button').show();

        }
        // SUBMIT SCORE TO SERVER AND GET CURRENT HIGHSCORE
        mySiteQuizSubmit(percentageCorrect, quizId, userId, rootURL);

        // Remove screen X, show screen X+1
        //$('#step-'+(step_count+1)).slideDown();
        $('#final-step').slideDown();

        // Scroll the window back to the top of the quiz
        //scrollQuiz('top');

        // Remove the progress bar
        $('#quiz-progress_bar').hide();
    }

    //
    //
    // ***** Reload the quiz when the Try Again button is clicked *****
    //
    //
    $('#quiz-retry-button').click(function(e) {

        // Prevent the link executing
        e.preventDefault();

        // Reload the quiz
        // NOTE - this is the slightly simplistic way, reloading this quiz HTML page into #quiz-loader in the containing HTML page
        // If needs be, write a full reset/clearing function to restart the quiz
        $('#quiz-loader').load('load-me.html', function()
        {

            // Scroll back to top of quiz
            //scrollQuiz('top');

            // Error handling here if necessary

        });

    });

    //
    //
    // ***** Disable the quiz page submit buttons until you've answered enough questions on each page *****
    //
    //
    $('.quiz-button').attr('disabled', 'disabled');
    $('.quiz-button').addClass('quiz-button-disabled');
    //$('.quiz-button').fadeTo(0, 0.5);

    // Reverse the above for the Try Again button at the end of the quiz
    $('#quiz-retry-button').removeAttr('disabled');
    $('#quiz-retry-button').removeClass('quiz-button-disabled');
    $('#quiz-retry-button').fadeTo(0, 1);

    //
    //
    // ***** Watch for the user clicking an answer radio button to count answers on each page *****
    //
    //

    // Select all radio buttons the user could click to answer
    var answerCheckRadioButtons = $('#quiz-container input[type=radio]');

    // Add a click action to them
    answerCheckRadioButtons.on('click', function(e) {
//console.log("Clicked radio " + this.id);

        // Start a counter to track how many radio buttons have been clicked
        var answerCounter = $('#quiz-container input[type=radio]:checked').size();
        var numberOfQuestionsPerPage = 1;
        // This next bit is a hack and will only work if there are always four questions to a page :(
            var targetQuizPage = answerCounter / numberOfQuestionsPerPage;
            var targetButton = $('#submit_' + targetQuizPage);

//console.log("targetQuizPage: " + targetQuizPage);
        // Turn that target into an addressable submit button, then remove the disabled class from that button

        // If you have the correct button, switch it back on and remove the disabled classes
        if (targetButton) {

            targetButton.removeAttr('disabled');
            targetButton.removeClass('quiz-button-disabled');
            targetButton.fadeTo(0, 1);

            // Kill the reference to the target button, ready for the next click
            targetButton = null;

            // Scroll the window down to the bottom of the screen so the user sees the now-activated Next button
            //scrollQuiz('bottom');

        }
    });
});