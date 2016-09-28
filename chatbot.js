function askAQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("text-area").innerHTML += input + ": " + giveresponse + " ";
}

var responses = {
  "Hi" : "What up? <br/> <br/>",
  "How are you" : "Get out of my swamp! <br/> <br/>",
  "Whats up" : "Gas prices <br/> <br/>",
  "Can you help me with my code" : "I don't get payed enough for that <br/> <br/>",
  "" : ""
}
