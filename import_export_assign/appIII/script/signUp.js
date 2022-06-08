   
function formdata(N,add,E,pas){
    this.userName=N;
    this.userAddress=add;
    this.userEmail=E;
    this.pass=pas;
}


function submitfun(e){
 e.preventDefault();
   let fos =document.getElementById("form")

   let Name=fos.userName.value;

   let Address=fos.userAddress.value

   let Email=fos.userEmail.value;

   let Password=fos.pass.value;

    let person= new formdata (Name,Address,Email,Password)
   //  console.log(ram)

    let arr=JSON.parse(localStorage.getItem("information")) || []
    arr.push(person)
    console.log(arr)

    localStorage.setItem("information",JSON.stringify(arr))
    window.location.href="login.html"


}
