function showContent() {
  element = document.getElementById("content");
  check = document.getElementById("check");
  if (check.checked) {
      element.style.display='block';
      document.getElementById("screen").value = "";
  }
  else {
      element.style.display='none';
      document.getElementById("screen").value = "APAGADO";
  }
  console.log(element)
  console.log(check)
}
let addSymbol = (character) => {
  document.getElementById("screen").value += character;
}
let clearScreen = () => {
  document.getElementById("screen").value = "";
}
let calculate = () => {
  let res = "ERROR";
  let operation = document.getElementById("screen").value;
  let operator = "";
  let operatorPosition = -1;
  let found = false;
  for(let i = 0; i < operation.length && found == false; i++){
    if(!isNaN(operation[i]) && isNaN(operation[i + 1])){
      operator = operation[i + 1];
      operatorPosition = i + 1;
      found = true;
    }
  }
  let value1 = "";
  let value2 = "";
  found = false
  for(let i = 0; i < operation.length; i++){
    if(i < operatorPosition){
      value1 += operation[i];
    }
    else if (i > operatorPosition){
      value2 += operation[i];
    }
  }
  console.log(value1);
  console.log(value2);
  console.log(res);
  if(!isNaN(value1) && !isNaN(value2)){
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    switch(operator){
      case "+":
          res = value1 + value2;
        break;
      case "-":
          res = value1 - value2;
        break;
      case "*":
          res = value1 * value2;
        break;
      case "/":
          res = value1 / value2;
        break;
    }
  }
  console.log(value1);
  console.log(operator);
  console.log(value2);
  console.log(res);
  document.getElementById("screen").value = res;
}