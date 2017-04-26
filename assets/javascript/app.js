// var audio = new Audio("");


// setTimeout(thirtySeconds, 1000 * 30);
// setTimeout(timeUp, 1000 * 59);
// // DONE: Change the "display" div to "00:00."
// $("#display").html("00:00");

// function thirtySeconds() {

//     // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//     // console log 10 seconds left
//     $("#timeLeft").append("<h2>30 Seconds Left!</h2>");
//     console.log("30 seconds left");
// }

// function timeUp() {
//     $("#timeLeft").append("<h2>Time Is Up!</h2>");
//     console.log("Time Is Up!");
// }

// This code will run as soon as the page loads
// jquery for question
// change to on window load watch starts instead of presssing button
// $("#start").on("click", stopwatch.start);
// start: function() {

//         // DONE: Use setInterval to start the count here.
//         intervalId = setInterval(stopwatch.count, 1000);
//     },

//     var intervalId;

// function start() {
//     intervalId = setInterval(count, 1000);
// }
$(document).ready(function() {

    // var questions = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive"]
    // for (var i = 0; i < questions.length; i++) {
    //     console.log(questions[i])

    // var questionID = "#"+questions[i]
    // console.log(questionID);

    // setTimeout(
    //     $(questionID).fadeIn()
    // , 1000 * 5);
    $('#questionOne').delay(1000).fadeIn();
    $('#questionOne').delay(10000).fadeOut();

    $('#questionTwo').delay(12000).fadeIn();
    $('#questionTwo').delay(10000).fadeOut();

    $('#questionThree').delay(23000).fadeIn();
    $('#questionThree').delay(10000).fadeOut();

    $('#questionFour').delay(35000).fadeIn();
    $('#questionFour').delay(10000).fadeOut();

    $('#questionFive').delay(46000).fadeIn();
    $('#questionFive').delay(10000).fadeOut();

    // setTimeout(
    //        $(questionOne).fadeOut()
    // , 10000 );



    // };
    //     setTimeout( $( "#questionOne" ).hide, 4000 );
    //     // $("#questionOne").delay(5000).fadeOut();
    //     $("#questionTwo").delay(1000 * 120).fadeOut();
    //     $("#questionThree").delay(1000 * 180).fadeOut();
    //     $("#questionFour").delay(1000 * 240).fadeOut();
    //     $("#questionFive").delay(1000 * 300).fadeOut();

    // gets value from form

    $(".submit").click(function(event) {
        event.preventDefault();
        var value = $("input[name='item']:checked").val();
        alert(value);


        var answers = $('.radioButton:checked').map(function() {
            return this.value;
        }).get().join(',')

        console.log(answers);
    });



function checkAnswer(){
  choices = document.getElementsByName("choices");

console.log()
  if ( $('input[name=choices]:checked').length > 0) {
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
     
      }
    }

    if(choice == allQuestions[pos]["correctAnswer"]){
      correct++;
    }
    pos++;
    renderQuestion();
  } else {
    alert("Select Something");
  }
}   

function renderQuestion(){
  test = _("test");
  if(pos >= allQuestions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+allQuestions.length+" questions correct</h2>";
    _("test_status").innerHTML = "Test Completed";
    pos = 0;
    correct = 0;
    return false;
  }

  _("test_status").innerHTML = "Question "+(pos+1)+" of "+allQuestions.length;
  question = allQuestions[pos]["question"];
  chA = allQuestions[pos]["choices"][0];
  chB = allQuestions[pos]["choices"][1];
  chC = allQuestions[pos]["choices"][2];
  test.innerHTML = "<h2>"+question+"</h2>";
  test.innerHTML += "<input type='radio' name='choices' value='0'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='1'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='2'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='goBack()'>Prev</button>";
  test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
     var UserAnswers = [];
     //In your code where you get a handle on the checked radio button, simply do
     choice = choices[i].value; //I'm assuming here is where you get the value
     UserAnswers.push(choice);

     //Once you do this for all the questions, just do
    localStorage["answers"] = JSON.stringify(UserAnswers);

    var StoredAnswers = JSON.parse(localStorage["answers"]);
//StoredAnswers[0] and so on will have the answers stored for the questions

    // $(window).on("load", function() {
    //       alert("window load occurred!");
    }// 
});
