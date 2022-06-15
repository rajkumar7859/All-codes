document.querySelector("form")
.addEventListener("submit",DsaApp);
localStorage.getItem("dsa")

var DsaArr=JSON.parse(localStorage.getItem("dsa"))|| [];

displayTable(DsaArr)


function DsaApp(event){
    event.preventDefault();
    
var Dsaobj={
    quetitle:document.querySelector("#title").value,
quelink:document.querySelector("#link").value,
 quediff:document.querySelector("#difficulty").value,
}
DsaArr.push(Dsaobj);
 console.log(DsaArr)

 displayTable(DsaArr)
 var x=localStorage.setItem("dsa",JSON.stringify(DsaArr));

}

function displayTable(DsaArr){
    document.querySelector("tbody").innerHTML="";
DsaArr.forEach(function (ele){
    var tr=document.createElement("tr");
    var td=document.createElement("td");
    td.innerText=ele.quetitle;
    var td1=document.createElement("td");
    td1.innerText=ele.quelink;

    var td2=document.createElement("td");
    td2.innerText=ele.quediff;

    var td3=document.createElement("td");
    if(ele.quediff=="Easy")
    {
       td3.innerText="No" 
    }
    else
    {
        td3.innerText="Yes"  
    }

    tr.append(td,td1,td2,td3);
    document.querySelector("tbody").append(tr)


})
    


}