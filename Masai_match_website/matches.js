// write js code here corresponding to matches.html
var list =JSON.parse(localStorage.getItem("matchList"));

displayData(list);

var fav=JSON.parse(localStorage.getItem("favMatch")) || [];

function venueSort(){
    var select=document.querySelector("#filterVenue").value;

    var filterList=list.filter(function (ele) {
        return ele.matchCity==select;
    });

    displayData(filterList)
}


function displayData(data){
    
data.forEach(function (elem){

var tr = document.createElement("tr");


var td1 = document.createElement("td");
td1.innerText=elem.matchCount;

var td2 = document.createElement("td");
td2.innerText=elem.matchTeamA;

var td3 = document.createElement("td");
td3.innerText=elem.matchTeamB;

var td4 = document.createElement("td");
td4.innerText=elem.matchDate;

var td5 = document.createElement("td");
td5.innerText=elem.matchCity;

var td6 =document.createElement("td")
td6.innerText="Favourite";
td6.style.color="red";
td6.style.cursor="pointer";
td6.addEventListener("click",function () {

    favouriteAdd(elem);
    
});



tr.append(td1,td2,td3,td4,td5 ,td6)
// console.log(td1,td2,td3,td4,td5);
document.querySelector("tbody").append(tr)

});

}

function  favouriteAdd(ele) {
    fav.push(elem)
    localStorage.setItem("favMatch",JSON.stringify(fav))

window.location.href="favourites.html"
}