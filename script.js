const display = document.getElementById('display')

function addToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    
    try{
       display.value = eval(display.value); 
    }catch{
        display.value = 'Error'
    }
}

//  function percentage(){

// //   let display = parseFloat(document.getElementById('display').value)

// //   let percentage = display/100

// //   document.getElementById('display').value =percentage

// let display = document.getElementById('display').value

// let result = eval(display)

// result = result/100

// document.getElementById('display').value = result
// }

function percentage() {
    const currentValue = parseFloat(display.value);
    const percentageValue = currentValue / 100;
    display.value = percentageValue.toString();
  }
  
function del(){
display.value = display.value.slice(0,-1)
}

// function sqrt(){
//     let display = document.getElementById('display').value

//     let result = eval(Math.sqrt(display))
    

    
//     document.getElementById('display').value = result
// }

function sqrt() {
    const currentValue = parseFloat(display.value);
    if (currentValue < 0) {
      display.value = 'Error';
    } else {
      const sqrtValue = Math.sqrt(currentValue);
      display.value = sqrtValue.toString();
    }
  }