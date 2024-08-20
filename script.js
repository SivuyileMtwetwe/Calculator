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

 function percentage(){

//   let display = parseFloat(document.getElementById('display').value)

//   let percentage = display/100

//   document.getElementById('display').value =percentage

let display = document.getElementById('display').value

let result = eval(display)

result = result/100

document.getElementById('display').value = result
}

function del(){
display.value = display.value.toString().slice(0,-1)
}