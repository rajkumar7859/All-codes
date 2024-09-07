// const api = "";

let populerVideo = async ()=>{
  try {
    let url1=`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=28&key=AIzaSyAzxPhVF3OJEc10SuGwxz8nofa4tBYoPe0`;
    // let url1=`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=28&key=${api}`;

    let response= await fetch(url1)

    let ans=await response.json()
    console.log(ans.items)
    appendVideo(ans.items)

  } catch (error) {
    console.log("errrrr");
  }
};
populerVideo()

let appendVideo=(ans)=>{

let container=document.getElementById("container");

ans.forEach(({id} ) => {
  
  let div=document.createElement("div")

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.allow="fullscreen"; 
  
  div.append(iframe )
  container.append(div)

});
}