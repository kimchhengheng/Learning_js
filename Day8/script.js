var inval = document.getElementById("input")
var display = document.getElementById("display")
// var btn = document.getElementsByClassName("base") // this type is object not array
var btn = document.querySelectorAll('.base')
var inval2 = document.getElementById("input2")
var display2 = document.getElementById("display2")
var btn2 = document.querySelectorAll('.base2')
var todecimal = document.getElementById("todecimal")
var decimal = document.getElementById("decimal")


todecimal.style.display ="none"
decimal.style.display = "block"



function getinput(){
    while(true) {
        input  = prompt('what number you want to convert')
        if(!isNaN(input)){
            break
        }

    }
}
function displayfromdeci(num){
    input = undefined
    getinput()
    // console.log(typeof(num)) num is type string to switch case with number does not work
    switch(num){
        case "2":
            inval.innerHTML = `<strong>The input value in decimal is : </strong> ${input}`// need ` to make it string format in ES6
            output = Number(input).toString(2)
            display.innerHTML = `<strong>The input value in binary is : </strong> ${output}`
            break
        case "8":
            inval.innerHTML = `<strong>The input value in decimal is : </strong> ${input}`// need ` to make it string format in ES6
            output = Number(input).toString(8)
            display.innerHTML = `<strong>The input value in octal is : </strong> ${output}`
            break
        case "16":
            inval.innerHTML = `<strong>The input value in decimal is : </strong> ${input}`// need ` to make it string format in ES6
            output = Number(input).toString(16)
            display.innerHTML = `<strong>The input value in Hexadecimal is : </strong> ${output}`
            break
    }
}
function displaytodeci(num){
    input = undefined
    input  = prompt('what number you want to convert')
    
    switch(num){
        case "bin":
            output = Number.parseInt(input, 2)
            while(isNaN(output)){
                alert("number does not exit in binary")
                input  = prompt('what number you want to convert')
                output = Number.parseInt(input, 2)
            }
            inval2.innerHTML = `<strong>The input value in binary is : </strong> ${input}`
            display2.innerHTML = `<strong>The input value in decimal is : </strong> ${output}`
            break
        case "oct":
            output = Number.parseInt(input, 8)
            while(isNaN(output)){
                alert("number does not exit octal")
                input  = prompt('what number you want to convert')
                output = Number.parseInt(input, 8)
            }
            inval2.innerHTML = `<strong>The input value in octal is : </strong> ${input}`
            display2.innerHTML = `<strong>The input value in decimal is : </strong> ${output}`
            break
        case "hex":
            output = Number.parseInt(input, 16)
            while(isNaN(output)){
                alert("number does not exit in hexadecimal")
                input  = prompt('what number you want to convert')
                output = Number.parseInt(input, 16)
            }
            inval2.innerHTML = `<strong>The input value in hexadecimal is : </strong> ${input}`
            display2.innerHTML = `<strong>The input value in decimal is : </strong> ${output}`
            break
    }
}
function toggledisplay(){
    if(todecimal.style.display =="none"){
        todecimal.style.display = "block"
        decimal.style.display = "none"
        return
    }
    if(decimal.style.display =="none"){
        decimal.style.display ="block"
        todecimal.style.display = "none"
        return
    }

}


// console.log(Number.parseInt(input, 2)) if you put 33 there is no number in binary 33 since binary is only 0 1 this like convert binary to decimal

// console.log(input.toString(2)) convert that number to binary so every decimal can convert to binbary
