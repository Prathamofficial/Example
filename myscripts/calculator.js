function computeresult(operator){


    let a= parseFloat(document.getElementById("num1").value)
    let b= parseFloat(document.getElementById("num2").value)
    


    switch(operator){
        case 0 : document.getElementById("Result").value=a+b; break;

        case 1 :document.getElementById("Result").value=a-b; break;


        case 2 : document.getElementById("Result").value=a*b; break;


        case 3 : 
        if(b==0){
        alert("divisible by zero error")
    document.getElementById("num2").value=""
    document.getElementById("num2").focus()
    }
    else{
        document.getElementById("Result").value=a/b; break;
    }
    }
}