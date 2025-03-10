

var registrationArray=JSON.parse(localStorage.getItem("regDetails"))||[]
console.log(registrationArray.name)
function registrationDetails(){
    fname=document.getElementById("fname").value;
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    mobileNo=document.getElementById("mobileNo").value;
    var registration={
        name:fname,
        username:username,
        password:password,
        mobileNo:mobileNo

    }
    registrationArray.push(registration)
    localStorage.setItem("regDetails",JSON.stringify(registrationArray))
    alert("Registration Successfull")
    

}
function checkAdminStudent(){
    var loginName=document.getElementsByName("login")
    for(var i=0;i<2;i++){
        var radioBtns=loginName[i]
        if( i==0 && radioBtns.checked){
            score=1
            return
        }else{
            score=2
        }
        }
    }

 



// function checkAdminStudent(){
//     var loginName=document.getElementByIdName("login")

// }
// for(var i=0 ;i<2;i++){
//     var radioBtns=loginName[i]
//     if(i==0 && radioBtns.checked){
//         score=1
//         return
//     }else{
//         score=2
//     }

// }

function login(){
    userNameLogin=document.getElementById("userNameLogin").value;
    passwordLogin=document.getElementById("passwordLogin").value;
    adminCheck=document.getElementById("adminLogin").innerText
    studentCheck=document.getElementById("studentLogin").innerText
    
    msg=document.getElementById("msg")
    
   registrationArray=JSON.parse(localStorage.getItem("regDetails"))
var currentIndex=0;
    for(let i=0;i< registrationArray.length;i++){
        if(userNameLogin==""){
            msg.innerHTML="please Fill Username"
            return
        }
        if(passwordLogin==""){
            msg.innerHTML="please Fill Password"
            return
        }else if(userNameLogin==registrationArray[currentIndex].username && passwordLogin==registrationArray[currentIndex].password){
if (score==1) {
    window.location="insert-question.html"
}if (score==2) {
    window.location="quiz_with_single_que.html"
    
}else{
    alert("login Failed")
}
        }else{
            msg.innerHTML="login failed"
        }
    
   }
   
    }





   
   

   

    // registrationArray.map((item)=>{
    //    if(userNameLogin==item.username && passwordLogin==item.password){
    //         console.log(item.username , item.password )
           
    //     }
    //     else{
    //         console.log('denied')
    //     }
        
     //} 
   // )


    
    
    
    


    

    
    
    

    

