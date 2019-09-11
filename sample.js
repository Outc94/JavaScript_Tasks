$(document).ready(function(){
  function score_indicate(){
    // By making such a description, in the variable called subject_points
    // You can create an array of [language score, English score, math score, science score, society score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // Furthermore, by making such a description, the total point is output to the right part: "total point:"
    let number = subject_points.length;
    let sum = 0;
    for (let i = 0; i < number; i++) {
       sum = sum + subject_points[i];
 }
    $("#sum_indicate").text(sum);

    // write the process to output the average point referring to the above here
    let average_point = (subject_points[0] + subject_points[1] + subject_points[2] + subject_points[3] + subject_points[4]) / 5;
    $("#avarage_indicate").text(average_point);
  };

  function get_achievement(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let average_point = (subject_points[0] + subject_points[1] + subject_points[2] + subject_points[3] + subject_points[4]) / 5;

    // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)
    if (average_point >= 80) {
        $("#evaluation").text("A");
    } else if (average_point >= 60 && average_point < 80) {
        $("#evaluation").text("B");
    } else if (average_point >= 40 && average_point < 60) {
        $("#evaluation").text("C");
    } else {
        $("#evaluation").text("D");
    }
    return $("#evaluation").text();
  };

function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                                                ];
    // write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
    if (subject_points[0] < 60 || subject_points[1] < 60 || subject_points[2] < 60 || subject_points[3] < 60 || subject_points[4] < 60) {
         $("#judge").text("Fail");
    } else {
          $("#judge").text("Pass");
    }
  return $("#judge").text();
};

function judgement(){
    // write the processing to output contents such as “Your grade is A when you press the “final judge” button.
    // By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
    let rank = get_achievement();
    let pass_failure = get_pass_or_failure();
  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${rank}. You ${pass_failure}</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});

// Description of the meaning of the given part of th code

// 1. We use this function to execute the JavaScript only when DOM is ready to be manipulated by JS.
// 2. It starts the click event and runs the function associated to the id selector btn-evaluation (referred in the html code)
// 3 . It changes the elemnts associated to the given attributes. Therefore the attributes' values can be changed throughout the processes.
// 4. it sets the value of national_language
// 5. Number () converts the object argument to a number that represents the object's value which would be the entered value in our case
// 6.  Get the combined text contents of each element in the set of matched elements, including their descendants. In our case we have the point in each subject that have been added together and the result is the indicated sum.
// 7. .append() is a method that inserts specified content at the end of the selected elements
