const api_key = "AIzaSyAzxPhVF3OJEc10SuGwxz8nofa4tBYoPe0";

let arr=[]
let search = async () => {
  try {
    let query = document.getElementById("query").value;

    // let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=${api_key}`;

    let res = await fetch(url);
    
    let data = await res.json();
    
    appendData(data.items);
    // console.log(data.items);
    
    

  } catch (error) {
    console.log("errr");
  }
};


//  id: { videoId },
let appendData = (data) => {
  let container = document.getElementById("container");

  container.innerHTML=null;

    data.forEach(( {id: {videoId} , snippet: { title ,thumbnails } }) => {
    let div=document.createElement("div");

    // let iframe = document.createElement("iframe");
    // iframe.src = `https://www.youtube.com/embed/${videoId}`;
    // iframe.allow="fullscreen";  

    let image=document.createElement("img");
    image.src=thumbnails.high.url;

    let name=document.createElement("h3");
   name.innerText=title;

   
   //  div.append(iframe,name)
   div.append(image,name)
   //  console.log(iframe,name);
   
   let video = {
     title,
     videoId,
    };
    
    div.onclick = () => {
      playVideo(video);
    };
    
    container.append(div);
    document.getElementById("pop").innerText=`Showing search results`
  });
  
};

let playVideo = (video) => {
arr.push(video)
localStorage.setItem("video", JSON.stringify(arr));
window.location.href = "videos.html";
};