function askAQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase()
  var giveresponse = responses[input]



  if (giveresponse == undefined) {
document.getElementById('text-area').innerHTML += "sorry I don't understand <br/> <br/>";
  }
  else {


  document.getElementById("text-area").innerHTML += input + ": " + giveresponse + " ";
  }
}

var responses = {
  "how are you" : "Get out of my swamp! <br/> <br/>",
  "whats up" : "Gas prices <br/> <br/>",
  "can you help me with my code" : "I don't get payed enough for that <br/> <br/>",
  "hi" : "Get out of my swamp! <br/> <br/>",
  "r u a g" : "yee ima 2 c00l 4 u <br/> <br/>",
  "omg r u really shrek" : "yep <br/> <br/>",
  "whats your favorite game" : "ogre-watch <br/> <br/>",
  "how old are you" : "im ogre 9000 <br/> <br/>",
  "what is your name" : "SHREK <br/> <br/>",
  "what time is it" : "look at the bottom right of your screen <br/> <br/>",
  "did you did good in school" : "yeah i was a ogre achiever <br/> <br/>",
  "how do you clean up messes" : "i use disinshrektant <br/> <br/>",
  "do you have any good quotes" : "check yourself befor you shrek yourself <br/> <br/>"
}

$(document).keydown(function(e) {
 if (e.keyCode == 13) {
askAQuestion();
 }
});
