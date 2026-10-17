console.log(document)

const mess = document.getElementById("message")

const btn1 = document.getElementById("loadbtn")
console.log(btn1)
const Pro = document.getElementById("pro")
const Gra = document.getElementById("gra")
const Sched = document.getElementById("shed")


btn1.addEventListener("click", function(){
    mess.innerHTML = "Loading Dashboard..."
    
    Pro.innerHTML = "Profile: Waiting....";
    Gra.innerHTML = "Grade: Waiting...";
    Sched.innerHTML = "Schedule: Waiting..."

   
    const proPromise = new Promise(function(resolve){
        setTimeout(function(){
            Pro.innerHTML = "Profile: loaded"
            resolve()
        },1000)
    })
    const graPromise = new Promise(function(resolve){
        setTimeout(function(){
            Gra.innerHTML = "Grade: loaded"
            resolve()
        },2000)
    })
    const SchedPromise = new Promise(function(resolve){
        setTimeout(function(){
            Sched.innerHTML = "Schedule: loaded"
            resolve()
        },3000)
    })

    Promise.all([proPromise,graPromise,SchedPromise])
    .then(function(){
        mess.innerHTML = "Dashboard Ready!"
    })
})