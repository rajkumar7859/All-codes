let arr=JSON.parse(localStorage.getItem("video")) || []
arr.forEach(( {videoId,title }) => {
    let container = document.getElementById("videoCont");
    
let div=document.createElement("div");

let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`;
// iframe.allow="fullscreen";  

let name=document.createElement("h3");
name.innerText=title;


div.append(iframe,name)

container.append(div);
});