$(document).ready(function(){
    
    $("#btn1").mousedown(function(){
        $(this).css("background","#f0b26c")
    })
    $("#btn1").mouseup(function(){
        $(this).css("background","#44f871")
    })
    $("#btn1").click(function(){
        $("#Title").text("You click the button!")
    })
    $("#btn1").dblclick(function(){
        $("#Title").text("You double click the button!")
    })
    
    $("#btn2").click(function(){
        $(".profile").hide("slow")
        $("#but").text("You hid the profile")
    })
    $("#btn3").click(function(){
        $(".profile").show(2000)
        $("#but").text("You show the profile")
    })
    
    $("#endbtn1").click(function(){
        $("tr:even").css("background","pink")
            
    })
    $("#endbtn2").click(function(){
            $("tr:odd").css("background","green")
            
    })
    
    $("#choose1").change(function(){
        let value = $(this).val()
        
        $("#choose2").text(value)

            
    })
    $("#endbtn1").dblclick(function(){
       
        $("#but").text("You hid the profile")
    })
    $("#endbtn2").dblclick(function(){
       
        $("#but").text("You show the profile")
    })
    $("#btnend1").click(function(){
        $("#endbtn").hide("slow")
       
    })
    $("#btnend2").click(function(){
        $("#endbtn").show(2000)
        
    })

})
