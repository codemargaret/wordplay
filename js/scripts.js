$(document).ready(function(){
  $("#wordplay").submit(function(event) {
    var sentence = $("input#words").val();

    alert(sentence);

    var splitWords = sentence.split(" ");

    alert(splitWords);

    event.preventDefault();
    var newArray = splitWords.map(function(splitWord){
      if(splitWord.length > 3){
        return splitWord;
      }else{
        return;
      }
    });
  alert(newArray);
    newArray.forEach(function(newA){
      if (!newA) {
          delete newA;
      };
    });

  alert(newArray);

  newArray.join();

  });
});
