// sign in
let userName = document.getElementById("input-name");
let userEmail = document.getElementById("input-email");
let userPass = document.getElementById("input-pass");
let alert = document.getElementById("alert")
let userslist = [];

// login
let userEmaillog = document.getElementById("input-emaillog")
let userPasslog = document.getElementById("input-passlog")
let alertLog = document.getElementById("alertlog")

if(localStorage.getItem("userslist") != null){
   userslist = JSON.parse(localStorage.getItem("userslist"))
}

function signup(){
    
            alert.classList.replace("d-block" , "d-none")
            let user={
                name: userName.value,
                email: userEmail.value,
                pass: userPass.value,
               }
                userslist.push(user);
                localStorage.setItem("userslist" , JSON.stringify(userslist))
                  
               clear()
               open("./login.html")
        }
    


function clear(){
    userName.value = ""
    userEmail.value = ""
    userPass.value = ""
}


function login(){
 for(let i = 0; i < userslist.length; i++){
    
    if(userEmaillog.value == userslist[i].email && userPasslog.value == userslist[i].pass){
        open("./home.html")
        alertLog.classList("d-block","d-none")
    }else{
        alertLog.classList.replace("d-none" , "d-block")
    }
 }
}

