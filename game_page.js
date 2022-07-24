player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1_name + ":";
document.getElementById("player_2").innerHTML = player2_name + ":";

document.getElementById("player_1score").innerHTML = player1_score;
document.getElementById("player_2score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn is : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn is : " + player2_name;

function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_ans= parseInt(number1) * parseInt(number2);
    question_no= "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box= "<br>Answer: <input type='text' id='input_check_box'>" ;  
    check_button= "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_no + input_box+ check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}