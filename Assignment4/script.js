
var numOne = document.getElementById("num1");
var numTwo = document.getElementById("num2");
var ans = document.getElementById("result");
ans.value = "";

function calculation(n){
    
    if(numOne.value == ""){
        var error = document.getElementById("errormsg1");
        error.innerText = "Please Enter Num 1"
        error.style.color = "red"
    }
     else if(numTwo.value == ""){
        var error = document.getElementById("errormsg2");
        error.innerText = "Please Enter Num 2"
        error.style.color = "red"
    }else{
        var error1 = document.getElementById("errormsg1");
        var error2 = document.getElementById("errormsg2");
        error1.innerText = "";
        error2.innerText = "";
        switch(n) {
           
            case 1:
                ans.value = Number(numOne.value) + Number(numTwo.value);    
                break;            
            case 2:
                ans.value = Number(numOne.value) - Number(numTwo.value);
                break;
            case 3:
                ans.value = Number(numOne.value) * Number(numTwo.value);
                break;
            case 4:
                {
                if(Number(numTwo.value) == 0){
                    var error = document.getElementById("errormsg3");
                    error.innerText = "Divident cannot be 0";
                    error.style.color = "red"
                }else{
                    var error = document.getElementById("errormsg3");
                    error.innerText = "";
                ans.value = Number(numOne.value) / Number(numTwo.value);
                }
                break;

            }

       
    }
        
       
    
    
}
}

