var homepageLoce=JSON.parse(localStorage.getItem("jobList"));
    
function sortnames(){
  var select=document.querySelector("#sortName").value;
   
  if (select=="Ascending")
  {
     homepageLoce.sort(function (a,b){
         if(a.personeName>b.personeName)  return 1;
         if(a.personeName<b.personeName)  return -1;
         return  0;
     })
  }
  displayTable (homepageLoce)

  if (select=="Descending")
  {
    homepageLoce.sort(function (a,b){
         if(a.personeName>b.personeName)  return -1;
         if(a.personeName<b.personeName)  return 1;
         return  0;
     })
  }


  displayTable (homepageLoce)
}
function rolefilter(){
    var filterdata=document.querySelector("#filterRole").value;
      
    var filters=homepageLoce.filter(function (elem){
        return elem.personeRole==filterdata;
        if(filterdata=="Filter By Job")
        {
          window.location.reload()
        }
       
    })
    displayTable (filters)
    
  }
 
 

var bookmarkArr=JSON.parse(localStorage.getItem("bookmarks"))||[];

displayTable (homepageLoce)
function displayTable (homepageLoce){
   document.querySelector("tbody").innerHTML=""
  homepageLoce.forEach(function (elem,index){

  var tr=document.createElement("tr");

  var td1=document.createElement("td");
  td1.innerText=elem.personeName;
  var td2=document.createElement("td");
  td2.innerText=elem.personeEmail;
  var td3=document.createElement("td");
  td3.innerText=elem.personeRole;
  var td4=document.createElement("td");
  td4.innerText=elem.personeSalary;
  var td5=document.createElement("td");
  td5.innerText="Bookmark";

  td5.addEventListener("click", function (){

    bookmark(elem,index)
  })

  tr.append(td1,td2,td3,td4,td5)

  document.querySelector("tbody").append(tr)
  })

}

function  bookmark(elem,index){

bookmarkArr.push(elem);
 
localStorage.setItem("bookmarks",JSON.stringify(bookmarkArr))
alert("Add to bookmark")
}
