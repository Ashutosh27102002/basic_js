//Attributes
let first=document.getElementById("first")//this is a good practise, otherwise also valid
let a=first.getAttribute("class")
console.log(first)
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// first.setAttribute("class", "sachin")//to change the attribute

//for custom attributes (data-)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)

//Insertion methods
let b=document.getElementsByTagName('div')[0] //syntax important
b.innerHTML=b.innerHTML+'<h1>hello world</h1>'

let div=document.createElement('div')
div.innerHTML='<h2>gooday</h2>'
// b.appendChild(div)
//b.prepend(div) //This puts it at begining of container
// b.before(div) //This puts it before but outside the container
//b.after(div) //This puts it just after but outside the container
//b.replaceWith(div) 

//Insert Adjacent methods(works same as previous method )
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')
// first.insertAdjacentHTML('beforebegin', <div class='test'>beforebegin</div>)
// first.insertAdjacentHTML('afterend', <div class='test'>afterend</div>)
// first.insertAdjacentHTML('afterbegin', <div class='test'>afterbegin</div>)
//first.remove()

//changing class
first.className="text-black red"
first.classList.remove("red")//to remove a specific class from class name
first.classList.add("red")//to add a specific class to class name
first.classList.toggle("red")//if absent then add & vice-versa
first.classList.contains("red")//to check agr hai