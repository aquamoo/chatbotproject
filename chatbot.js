var askQuestion = {
"Hello" : "Are we having a little party over here?"

  var answer = askQuestion[userinput];
}


function askQuestion() {
  var question = document.getElementById("input").value;
  document.getElementById("chat-area").textContent = question;
}
