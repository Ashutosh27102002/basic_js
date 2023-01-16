//element only navigation
let b=document.body
const changeColor = (b)=>{
 b.firstElementChild.style.background="pink"
}
console.log('First child of b is: ', b.firstChild)
console.log('First Element child of b is: ', b.firstElementChild)//This will give Element only; no text or commnent

//Table based navigation
let t=document.body.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tBodies) //No of table bodies
console.log(t.rows[0].cells) //cells in a perticular row

//Searching the DOM(change card color)
//Get element by ID
let title=document.getElementById('firstcardtitle')
title.style.color='red'
//document.getElementsByName('')
//document.getElementsByTagName('')
//document.getElementsByClass('')
//document.querySelectorAll('.card title')[0]

console.log(title.matches(".card-title")) 
// console.log(title.contains(""))

