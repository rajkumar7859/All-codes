// write js code here corresponding to favourites.html

var fav=JSON.parse(localStorage.getItem("favMatch"));

displayData(fav);

function displayData(data){
    data.forEach(function (ele ,index ){
    
    var tr = document.createElement("tr");
    
    
    var td1 = document.createElement("td");
    td1.innerText=ele.matchCount;
    
    var td2 = document.createElement("td");
    td2.innerText=ele.matchTeamA;
    
    var td3 = document.createElement("td");
    td3.innerText=ele.matchTeamB;
    
    var td4 = document.createElement("td");
    td4.innerText=ele.matchDate;
    
    var td5 = document.createElement("td");
    td5.innerText=ele.matchCity;
    
    var td6 =document.createElement("td")
    td6.innerText="Remove";
    td6.style.color="red";
    td6.style.cursor="pointer";
    td6.setAttribute("class","removeText");
    td6.addEventListener("click",function () {
        removeText(ele,index);
    
        
    });
    
    tr.append(td1,td2,td3,td4,td5 ,td6)
    // console.log(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr)
    
    });
    
    }
    
    function removeText(ele,index) {
        fav.splice(index,1)
        localStorage.setItem("favMatch",JSON.stringify(fav))
window.location.href="index.html"
        

    }