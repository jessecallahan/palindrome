$(document).ready(function () {
  $("form.Palli").submit(function (event) {
    event.preventDefault();

    var inputSentence = $("#sentence").val();
   
    //let finalResult= $("#result").empty();

   //$("#result").text(inputSentence);

    let lowercase = inputSentence.toLowerCase();
    let replace = lowercase.replace(/\s+/g, ''); 
    let sentence = replace.split("");
       let reverse = sentence.reverse();
        let newsentence = reverse.join("");


    if (newsentence === replace) {
      return $("#result").text(true);
    } else {
      return $("#result").text(false);
    } 

   // $("#result").text();

  });
});








