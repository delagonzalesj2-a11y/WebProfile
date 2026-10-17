const form =document.getElementById("studentForm")
const studentList =document.getElementById("studentList")
const mess =document.getElementById("message")

form.addEventListener("submit",function(event){
    event.preventDefault();

    const number = document.getElementById("studentNumber").value
    const first = document.getElementById("firstname").value
    const last = document.getElementById("lastname").value
    const Course = document.getElementById("course").value

    const row = document.createElement("tr")

    const numberCell = document.createElement("td")
    const firstCell = document.createElement("td")
    const lastCell = document.createElement("td")
    const courseCell = document.createElement("td")

        numberCell.textContent = number
        firstCell.textContent = first
        lastCell.textContent = last
        courseCell.textContent = Course

        row.appendChild(numberCell)
        row.appendChild(firstCell)
        row.appendChild(lastCell)
        row.appendChild(courseCell)


        studentList.appendChild(row)

        mess.textContent = "Student Added Successfuly!!"

        form.reset()


       
})

//darkmode

$(document).ready(function(){
$("#dark").click(function(){
    $("body").addClass("dark-mode")
})
$("#light").click(function(){
    $("body").removeClass("dark-mode")
})
})