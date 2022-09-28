
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let para =  document.querySelector("#demo");
let btn1 =  document.querySelector("#btn1");
const sirfitech = new Map();
btn1.addEventListener("click", () => { 
 var inputValue1 =  input1.value;
 var  inputValue2 =  input2.value;
  sirfitech.set(inputValue1, inputValue2)
  let text = "";
sirfitech.forEach (function(value, key) {
  text += key + " : " + value + "<br>"
  })
  
 document.getElementById("demo").innerHTML  = text;
})