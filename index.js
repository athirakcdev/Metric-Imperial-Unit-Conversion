/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num=0
let numEl=document.getElementById("num")
let convertEl=document.getElementById("convert-btn")
let lengthEl=document.getElementById("length")
let volumeEl=document.getElementById("volume")
let massEl=document.getElementById("mass")
let numberEl=document.getElementById("number-btn")
numberEl.addEventListener("click",function(){
    let number=prompt("Which is the number you need to convert?")
    // console.log(number)
    numEl.textContent=number
    num=parseInt(numEl.textContent)
    // console.log(typeof num)
    // let num1=20
})
convertEl.addEventListener("click",function(){
    // let lengthInFeet=num*3.81
    // console.log(lengthInFeet)
    lengthEl.textContent=`${num} meter = ${(num*3.281).toFixed(2)} feet | ${num} feet = ${(num/3.281).toFixed(2)} meters`
    volumeEl.textContent=`${num} litres = ${(num*0.264).toFixed(2)} gallons | ${num} gallons = ${(num/0.264).toFixed(2)} litres`
    massEl.textContent=`${num} kilos = ${(num*2.204).toFixed(2)} pounds | ${num} kilos = ${(num/2.204).toFixed(2)} pounds`
})