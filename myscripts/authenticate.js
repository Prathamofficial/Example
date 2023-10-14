function userauthentication(){

    let login=document.getElementById("login").value
    let password=document.getElementById("password").value

    if(login=="pratham" && password=="1234")
   { 
window.location="../components/home.html"
   }
else
alert("access denied....")
}