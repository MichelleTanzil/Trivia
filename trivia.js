$(document).ready(function() {
  var scoreCount = 0;

  function updateScore(n) {
    scoreCount += n;
    scoreCountString = scoreCount.toString();
    $("#score-count").text(scoreCountString + " Points");
    console.log(scoreCountString);
  }
  // API Get Requests for Questions
  $.get(
    "https://opentdb.com/api.php?amount=3&category=9&type=multiple",
    function(data) {
      general = data.results;
    }
  );
  $.get(
    "https://opentdb.com/api.php?amount=3&category=15&type=multiple",
    function(data) {
      entertainment = data.results;
    }
  );
  $.get(
    "https://opentdb.com/api.php?amount=3&category=18&type=multiple",
    function(data) {
      science = data.results;
    }
  );

  // Show Questions
  // General
  $("#q1").click(function() {
    $("#q1").html(
      "<div class='text-center'> <p>" +
        general[0].question +
        "</p> <p>" +
        general[0].incorrect_answers[0] +
        "</p> <p>" +
        general[0].incorrect_answers[1] +
        "</p> <p>" +
        general[0].correct_answer +
        "</p> <p>" +
        general[0].incorrect_answers[2] +
        "</p></div>"
    );
  });
  $("#q2").click(function() {
    $("#q2").html(
      "<div class='text-center'> <p>" +
        general[1].question +
        "</p> <p>" +
        general[1].incorrect_answers[0] +
        "</p> <p>" +
        general[1].correct_answer +
        "</p> <p>" +
        general[1].incorrect_answers[1] +
        "</p> <p>" +
        general[1].incorrect_answers[2] +
        "</p></div>"
    );
  });
  $("#q3").click(function() {
    $("#q3").html(
      "<div class='text-center'> <p>" +
        general[2].question +
        "</p> <p>" +
        general[2].correct_answer +
        "</p> <p>" +
        general[2].incorrect_answers[0] +
        "</p> <p>" +
        general[2].incorrect_answers[1] +
        "</p> <p>" +
        general[2].incorrect_answers[2] +
        "</p></div>"
    );
  });
  // Entertainment
    $("#q4").click(function() {
      $("#q4").html(
        "<div class='text-center'> <p>" +
          entertainment[0].question +
          "</p> <p>" +
          entertainment[0].incorrect_answers[0] +
          "</p> <p>" +
          entertainment[0].incorrect_answers[1] +
          "</p> <p>" +
          entertainment[0].correct_answer +
          "</p> <p>" +
          entertainment[0].incorrect_answers[2] +
          "</p></div>"
      );
    });
    $("#q5").click(function() {
      $("#q5").html(
        "<div class='text-center'> <p>" +
          entertainment[1].question +
          "</p> <p>" +
          entertainment[1].incorrect_answers[0] +
          "</p> <p>" +
          entertainment[1].correct_answer +
          "</p> <p>" +
          entertainment[1].incorrect_answers[1] +
          "</p> <p>" +
          entertainment[1].incorrect_answers[2] +
          "</p></div>"
      );
    });
    $("#q6").click(function() {
      $("#q6").html(
        "<div class='text-center'> <p>" +
          entertainment[2].question +
          "</p> <p>" +
          entertainment[2].correct_answer +
          "</p> <p>" +
          entertainment[2].incorrect_answers[0] +
          "</p> <p>" +
          entertainment[2].incorrect_answers[1] +
          "</p> <p>" +
          entertainment[2].incorrect_answers[2] +
          "</p></div>"
      );
    });
  // Science
      $("#q4").click(function() {
        $("#q4").html(
          "<div class='text-center'> <p>" +
            entertainment[0].question +
            "</p> <p>" +
            entertainment[0].incorrect_answers[0] +
            "</p> <p>" +
            entertainment[0].incorrect_answers[1] +
            "</p> <p>" +
            entertainment[0].correct_answer +
            "</p> <p>" +
            entertainment[0].incorrect_answers[2] +
            "</p></div>"
        );
      });
      $("#q5").click(function() {
        $("#q5").html(
          "<div class='text-center'> <p>" +
            entertainment[1].question +
            "</p> <p>" +
            entertainment[1].incorrect_answers[0] +
            "</p> <p>" +
            entertainment[1].correct_answer +
            "</p> <p>" +
            entertainment[1].incorrect_answers[1] +
            "</p> <p>" +
            entertainment[1].incorrect_answers[2] +
            "</p></div>"
        );
      });
      $("#q6").click(function() {
        $("#q6").html(
          "<div class='text-center'> <p>" +
            entertainment[2].question +
            "</p> <p>" +
            entertainment[2].correct_answer +
            "</p> <p>" +
            entertainment[2].incorrect_answers[0] +
            "</p> <p>" +
            entertainment[2].incorrect_answers[1] +
            "</p> <p>" +
            entertainment[2].incorrect_answers[2] +
            "</p></div>"
        );
      });
});
