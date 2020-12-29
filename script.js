


(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0; i<names.length; i++){
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter==="j") {
      var byeSpeaker = "Good Bye ";
      console.log( byeSpeaker + names[i]);
    }
    else {
    var helloSpeaker = "Hello ";
    console.log(helloSpeaker + names[i]);
    }
  }
})();

