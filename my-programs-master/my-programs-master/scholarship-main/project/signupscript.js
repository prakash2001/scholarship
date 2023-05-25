function validateEmail(){
    var email = document.getElementById('mail_id').value;
    var pattern = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"; 
   
if(email.match(pattern) == null){
var errorMasg = document.getElementById("errorMsg");

errorMasg.classList.remove('errorMail')
} 
    

}