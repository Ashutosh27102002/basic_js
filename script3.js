// let a=setTimeout(function(){
//     alert('I am inside the function')
// }, 9000)
// let b=prompt("Do you want a timeout?")
// if(b=='no'){
//     clearTimeout(a)
// }        
const sum=(a,b,c)=>{
    console.log('Yes I am running at '+(a+b+c))
}
setTimeout(sum, 3000, 1, 2, 3)
//similarly setInterval

//EVENTS(Can be handeled by attributes AWA JS)
let a = document.getElementsByClassName("container")[0]
console.log("this one ",a)
a.onclick= ()=> { //onclick HTML & JS dono mein hai, JS will dominate
let b = document.getElementsByClassName("container")[0]
b.innerHTML = "Hello World!"//click me ki jagah hello world aa jayega
}

let x=function(){
    alert('hello world 1')
}
let y=function(){
    alert('hello world 2')
}
btn.addEventListener('click', x)
btn.addEventListener('click', y)

let z=prompt("enter the number")
if(z=="2"){
    btn.removeEventListener('click', x)//same function object needs to be passed
}
