$(document).ready(function()  {
  $("#wordplay").submit(function(event) {
    event.preventDefault();
    let sentence = $("input#sentence1").val();
    let splitSentence = sentence.split(' ');
    let newArray = [];
    splitSentence.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }    
    });
    $("#output").text(newArray.reverse().join(" "))
  });
});