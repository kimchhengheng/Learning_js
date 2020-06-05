let image = document.getElementById('image') 
// it return the collection 
let img = document.getElementsByTagName('img')
let dark = document.getElementById('dark')
let light  = document.getElementById('light')
let todo = document.getElementById('todo')
let list = document.getElementById('list')
var inc = 0 
var re = /[\d+~!@#$%^&*]+/

img[0].addEventListener('click',flipimg)
// image.addEventListener('click', flip)
function flip(){
    image.classList.add('flip')
    setTimeout(()=>{image.classList.remove('flip')}, 3000)
}
function flipimg(){
   
    img[0].classList.add('flipimage')
    setTimeout(()=>{img[0].classList.remove('flipimage')}, 3000)

}
dark.addEventListener('click', ()=>{
    document.getElementById('profile').style.background= "linear-gradient(315deg, #af8c9d 0%, #8cacac 74%)"
})

light.addEventListener('click', ()=>{
    document.getElementById('profile').style.background= "linear-gradient(315deg, #fdfbfb 0%, #c3cfe2 74%)"
})  
todo.addEventListener('click', ()=>{
    inc ++
    var li = document.createElement("li") // first create li 
    var todoinput = document.getElementById("add_todo").value // get value from input 
    // if(todoinput =="" ){
    //     alert("cannot add empty")
    // }
    // else if (!(isNaN(todoinput))){
    //     alert("cannot add number ")
    // }
    if(re.test(todoinput) || todoinput == ""){
        alert("cannot add") // regularexpression.test(string)
    }

    else{
        var tem = document.createTextNode(todoinput)// create text 
        li.appendChild(tem)// li append the text
        // append the list to list 
        li.id = inc
        list.appendChild(li)
        // alltodo = document.getElementById('list').childNodes i dont know why it is not working yet because they display the tag of dom html not list 
        alltodo = document.querySelectorAll("#list > li")
        for(let i=0 ; i < alltodo.length;i++){
            console.log(alltodo[i])
            alltodo[i].addEventListener('click',()=> {
                //target event property returns the element that triggered the event.
                // console.log(event.target.id)
                let id = event.target.id
                document.getElementById(id).remove()
            })
        }
        
    }
    document.getElementById("add_todo").value= ""
    
})
// alltodo = document.getElementById('list').children
// console.log(alltodo[0]) at first it is undefine 

// console.log(image[0])