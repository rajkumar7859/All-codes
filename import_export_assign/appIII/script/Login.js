
function login(){
    var emails=document.getElementById("userEmail").value;
        var passwords=document.getElementById('pass').value;
        var arr=JSON.parse(localStorage.getItem("information")) 
        event.preventDefault();
  
    var newObject=true;
        var login=false;
       
        newObject = arr.filter(function(value){
               if(value.pass==passwords && value.userEmail==emails) 
               {
               
                login=true;
               }
               if(value.pass!==passwords && value.userEmail!==emails) 
               {
               
                 login=false;
                 
               }
            
                      });    
                      if(login===true)
                    {      
                        alert("successfuly login");
                         window.location.href="index.html";
                    }  
                    else{
                        alert("email and password not match");
                    }       
            
    
                }


