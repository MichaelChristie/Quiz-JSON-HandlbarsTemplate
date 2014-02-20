var data = {
  //title: "BMW 4 Series Coup&eacute; Quiz",
  //intro_msg: "Test your knowledge of the new BMW 4 Series Coup&eacute; with our multiple choice quiz.",
  //final_slide_success_msg: "Well done.",
  //final_slide_fail_msg: "Oops. Try again?",
  sections: [
    {
      section_name: "BMW 4 Series Coup&eacute;",
      questions: [
        {
          question_num: "1",
          question_text: "How many air inlets are there in the lower front bumper<br> of the new BMW 4 Series Coup&eacute;?",
          question_image_path: "quiz-image-1.jpg",
          feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
          feedback_message_correct: "Correct!",
          answers: [
            {"question_num": "1", "option":"1", correct: true },
            {"question_num": "1", "option":"2"},
            {"question_num": "1", "option":"4"}
          ]
        },
        {
          question_num: "2",
          question_text: "How much wider is the new 4 Series Coup&eacute;<br> compared to the outgoing 3 Series Coup&eacute;?",
          question_image_path: "quiz-image-2.jpg",
          feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
          feedback_message_correct: "Correct!",
          answers: [
            {"question_num": "2", "option":"25mm"},
            {"question_num": "2", "option":"35mm"},
            {"question_num": "2", "option":"45mm", correct: true }
          ]
        },
        {
          question_num: "3",
          question_text: "Which design feature visually connects the front and rear<br> of the new BMW 4 Series Coup&eacute; interior?",
          question_image_path: "quiz-image-3.jpg",
          feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
          feedback_message_correct: "Correct!",
          answers: [
            {"question_num": "3", "option":"Two tone door trims"},
            {"question_num": "3", "option":"Interior trim finisher", correct: true },
            {"question_num": "3", "option":"Centre Console in High-gloss black"}
          ]
        }
        // ,
        // {
        //   question_num: "4",
        //   question_text: "With Adaptive full LED Headlights where<br> are the cornering lights housed?",
        //   question_image_path: "quiz-image-4.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "4", "option":"Integrated into the main unit", correct: true },
        //     {"question_num": "4", "option":"Integrated into the fog lights"},
        //     {"question_num": "4", "option":"Underneath the fog lights"}
        //   ]
        // },
        // {
        //   question_num: "5",
        //   question_text: "Which of these technologies is unique to the segment<br>for the new BMW 4 Series Coup&eacute;?",
        //   question_image_path: "quiz-image-5.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "5", "option":"Adaptive headlights"},
        //     {"question_num": "5", "option":"Full colour Head-up Display", correct: true },
        //     {"question_num": "5", "option":"Lane change warning"}
        //   ]
        // },

        // //put in correct question (6/16)
        // {
        //   question_num: "6",
        //   question_text: "Which media package comes as standard on the new BMW 4 Series Coup&eacute; Luxury and M Sport models?",
        //   question_image_path: "quiz-image-6.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "6", "option":"BMW Business Media Navigation", correct: true },
        //     {"question_num": "6", "option":"BMW Business Plus Media Navigation"},
        //     {"question_num": "6", "option":"BMW Professional Media Navigation"}
        //   ]
        // },
        // {
        //   question_num: "7",
        //   question_text: "Which of these is NOT a feature of the Driving Assistant<br> option available on the new BMW 4 Series Coup&eacute;?",
        //   question_image_path: "quiz-image-7.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "7", "option":"City collision mitigation"},
        //     {"question_num": "7", "option":"Night vision", correct: true },
        //     {"question_num": "7", "option":"Preventive Pedestrian Protection"}
        //   ]
        // },
        // {
        //   question_num: "8",
        //   question_text: "Which model will feature Launch Control <br>as standard?",
        //   question_image_path: "quiz-image-8.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "8", "option":"430d", correct: true },
        //     {"question_num": "8", "option":"435i"},
        //     {"question_num": "8", "option":"428i"}
        //   ]
        // },
        // {
        //   question_num: "9",
        //   question_text: "How much faster to 62mph is the new 428i<br>than the outgoing 325i?",
        //   question_image_path: "quiz-image-9.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "9", "option":"0.7 seconds faster"},
        //     {"question_num": "9", "option":"0.8 seconds faster", correct: true },
        //     {"question_num": "9", "option":"0.9 seconds faster"}
        //   ]
        // },
        // {
        //   question_num: "10",
        //   question_text: "Which engine variants of the new BMW 4 Series Coup&eacute;<br> will be available from October production?",
        //   question_image_path: "quiz-image-10.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "10", "option":"428i and 435i"},
        //     {"question_num": "10", "option":"428i, 435i and 420d", correct: true },
        //     {"question_num": "10", "option":"428i, 435i, 420d and 420i"}
        //   ]
        // },
        // {
        //   question_num: "11",
        //   question_text: "When will xDrive variants of the <br>new BMW 4 Series Coup&eacute; be available?",
        //   question_image_path: "quiz-image-11.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "11", "option":"From launch"},
        //     {"question_num": "11", "option":"November 2013", correct: true },
        //     {"question_num": "11", "option":"January 2014"}
        //   ]
        // },
        // {
        //   question_num: "12",
        //   question_text: "Which of these is an enhancement on the outgoing<br> 3 Series Coup&eacute; standard specification?",
        //   question_image_path: "quiz-image-12.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "12", "option":"17&quot; alloy wheels"},
        //     {"question_num": "12", "option":"Bluetooth hands-free with USB interface", correct: true },
        //     {"question_num": "12", "option":"Dakota leather upholstery"}
        //   ]
        // },
        // {
        //   question_num: "13",
        //   question_text: "What is the difference in price between the SE <br>and M Sport variants of the new BMW 4 Series Coup&eacute;?",
        //   question_image_path: "quiz-image-13.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "13", "option":"&pound;1,500"},
        //     {"question_num": "13", "option":"&pound;2,500"},
        //     {"question_num": "13", "option":"&pound;3,000", correct: true }
        //   ]
        // },
        // {
        //   question_num: "14",
        //   question_text: "Which model variant features High-gloss<br>black interior trim?",
        //   question_image_path: "quiz-image-14.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "14", "option":"Sport", correct: true },
        //     {"question_num": "14", "option":"Modern"},
        //     {"question_num": "14", "option":"M Sport"}
        //   ]
        // },
        // {
        //   question_num: "15",
        //   question_text: "Which model variant of the new BMW 4 Series Coup&eacute;<br> come with Sports seats as standard?",
        //   question_image_path: "quiz-image-15.jpg",
        //   feedback_message_incorrect: "<p>For more information please visit the <a href='#' target='_blank'>BMW 4 Series Coup&eacute; Product Launch Guide.</a></p>",
        //   feedback_message_correct: "Correct!",
        //   answers: [
        //     {"question_num": "15", "option":"SE and above", correct: true },
        //     {"question_num": "15", "option":"M Sport"},
        //     {"question_num": "15", "option":"Luxury"}
        //   ]
        // }
      ]
    }
  ]
};
