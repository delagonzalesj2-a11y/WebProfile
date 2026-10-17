console.log(document)

const image = document.getElementById("image")
const Name = document.getElementById("name")
const wo = document.getElementById("wor")
const wor = document.getElementById("word")


image.addEventListener(
    "mouseover",function(){
        image.style.transform = "scale(1.2)";
    }
);

image.addEventListener(
    "mouseout",function(){
        image.style.transform = "scale(1)";
    }
);


const Sct = document.getElementById("choice")
Sct.addEventListener(
    "change", function(){
        wor.textContent = Sct.value;
    }
)

const txt = document.getElementById("text")
txt.addEventListener(
    "focus", function(){
        
        txt.style.backgroundColor = "#d1e9c1";
    }
)
txt.addEventListener(
    "blur", function(){
        
        txt.style.backgroundColor = "#a5eb76";
    }
)
txt.addEventListener(
    "input", function(){
        Name.innerHTML = txt.value;
    }
)


const btn1 = document.getElementById("bt1")
btn1.addEventListener(
    "click", function(){
        Name.innerHTML = "Welcome to my Portfolio!"
        Name.style.color = "#266d26"
    }
)
const btn2 = document.getElementById("bt2")
btn2.addEventListener(
    "dblclick", function(){
        Name.innerHTML = "you click way to much"
        Name.style.color = "#a5eb76"
    }
)
const bx = document.getElementById("box1")
bx.addEventListener(
    "mouseout", function(){
        wo.innerHTML = "mouse is out"
    }
)
bx.addEventListener(
    "mouseover", function(){
        wo.innerHTML = "Welcome back"
    }
)