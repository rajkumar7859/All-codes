
// var playerNo1=document.getElementById("member-1")
// var box1=Math.floor(Math.random()*6)+1;
// document.querySelector(".p1").innerText=box1
// console.log(box1);

// var playerNo2=document.getElementById("member-2")
// var box2=Math.floor(Math.random()*6)+1;
// document.querySelector(".p2").innerText=box2
// console.log(box2);

// var playerNo3=document.getElementById("member-3")
// var box3=Math.floor(Math.random()*6)+1;
// document.querySelector(".p3").innerText=box3
// console.log(box3);

// if(box1 > box2 && box1 > box3)
// {
//     document.querySelector("h1").innerText="🚩Player 1 Wins"
//     document.querySelector("h1").style.color="green"
//     document.getElementById("member-1").style.background="green"
    
// }
// else if(box2 > box1 && box2 > box3 )
// {
//     document.querySelector("h1").innerText="🚩Player 2 Wins"
//     document.querySelector("h1").style.color="green"
//     document.getElementById("member-2").style.background="green"

// }
// else if(box3 > box1 && box3 > box2)
// {
//     document.querySelector("h1").innerText="🚩Player 3 Wins"
//     document.querySelector("h1").style.color="green"
//     document.getElementById("member-3").style.background="green"
// }   
// else
// {
//     document.querySelector("h1").innerText="😏Match Deaw!"
//     document.querySelector("h1").style.color="blue"
//     document.getElementById("member-1").style.background="blue"
//     document.getElementById("member-2").style.background="blue"
//     document.getElementById("member-3").style.background="blue"
// }

function game(){

    var x=document.getElementById("member-1")
   var y=document.getElementById("member-2")
   var z=document.getElementById("member-3")
 
    var div=Math.floor(Math.random()*6)+1;
    var div1=Math.floor(Math.random()*6)+1;
    var div2=Math.floor(Math.random()*6)+1;
 
    var a= x.innerHTML=div
    var b= y.innerHTML=div1
     var c=z.innerHTML=div2
 
 
     if( a>b && b>c){
         result.innerHTML="🚩Player 1 is winner"
          x.style.background="green"
          y.style.background="yellow"
          z.style.background="red"
        
     }
 
    else if(a>c && c>b){
        result.innerHTML="🚩Player 1 is winner"
        y.style.background="red"
        x.style.background="green"
        z.style.background="yellow"
    }
    else if(b>a && a>c){
        result.innerHTML="🚩Player 2 is winner"
        z.style.background="red"
        y.style.background="green"
        x.style.background="yellow"
    }
    else if(b>c && c>a){
        result.innerHTML="🚩Player 2 is winner"
     z.style.background="yellow"
     y.style.background="green"
     x.style.background="red"
    }
    else if(c>b && b>a){
        result.innerHTML="🚩Player 3 is winner"
     z.style.background="green"
     y.style.background="yellow"
     x.style.background="red"
    }
    else if(c>a && a>b){
        result.innerHTML="🚩Player 3 is winner"
     z.style.background="green"
     y.style.background="red"
     x.style.background="yellow"
    }
    else{
        result.innerHTML="😁DRAW!"
     z.style.background="blue"
     y.style.background="blue"
     x.style.background="blue"
    }
 }
