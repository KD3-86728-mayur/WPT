var IMG = document.getElementById("image");
var xax = document.getElementById("xaxis");
var yax = document.getElementById("yaxis");
var n = 0;
var t = 0;
var x;

function startbtn(){
   
    x = window.setInterval(increase,20)
    
}

function increase(){
    n = n + 3;
    var d = 0;
    d = d+5;
    if(n<650){
    xax.value = n+"px";    
    a =  IMG.style.marginLeft = n + "px"
    }else{
        
        t = t + 3;
        if(t < 350){
        yax.value = t+"px";
        IMG.style.rotate = t+"deg";
        a =  IMG.style.marginTop = t + "px"
        }else{
            window.clearInterval(x);
        }
    }
}

function stopbtn(){
    console.log(x)
    window.clearInterval(x);
}
