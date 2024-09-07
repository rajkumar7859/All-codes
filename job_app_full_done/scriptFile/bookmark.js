var bookmarsLocal=JSON.parse(localStorage.getItem("bookmarks"));
     
  
displayTable(bookmarsLocal)

function  displayTable(bookmarsLocal){

  bookmarsLocal.forEach(function (elem,index){
     var tr=document.createElement("tr")


     var td1=document.createElement("td");
     td1.innerText=elem.personeName

     var td2=document.createElement("td");
     td2.innerText=elem.personeEmail

     var td3=document.createElement("td");
     td3.innerText=elem.personeRole

     var td4=document.createElement("td");
     td4.innerText=elem.personeSalary;

     var td5=document.createElement("td");
     td5.innerText="DELETE"
     td5.style.backgroundColor="red"
     td5.style.cursor= "Pointer"
     
     td5.addEventListener("click",function(){
       deletebookmarks(index)
     })


     tr.append(td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(tr)

  })
}

function  deletebookmarks(index){

  bookmarsLocal.splice(index,1)

  localStorage.setItem("bookmarks",JSON.stringify( bookmarsLocal))
  alert("Delete from bookmark")
//   window.location.reload()
  
}
