document.querySelector("form").addEventListener("submit",homefun)

var homeArr=JSON.parse(localStorage.getItem("jobList")) || [];

function homefun(event){
event.preventDefault();
 
var objArr={
  personeName:document.querySelector("#name").value,
  personeEmail:document.querySelector("#email").value,
  personeRole:document.querySelector("#role").value,
  personeSalary:document.querySelector("#salary").value,
}

homeArr.push(objArr)

localStorage.setItem("jobList",JSON.stringify(homeArr))
alert("Data Store successfull")
form.reset()

}
