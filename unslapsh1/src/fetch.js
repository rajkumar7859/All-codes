
let searchImages = async (api,value)=>{
    // let value=document.getElementById("query").value;
    try {

let res=await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=${api}`);
// let res=await fetch(`https://api.unsplash.com/search/photos/?query=car&per_page=20&client_id=rqKKhIz64OH5t1a7dzNqVx8SP7CehVVJn5fbuvdFJEE`);

let data=await res.json()

return data;

    } catch (error) {
        console.log("errrrrrr............");
    }
}
import axios from 'axios'
document.getElementById("navbar").innerHTML=navbar


let appendData=(data,container)=>{

    data.forEach(ele => {
        
        let box=document.createElement("div")
    
        let images=document.createElement("img")
        images.src=ele.urls.small;
    
        let dic=document.createElement("h3")
        dic.innerText=ele.alt_description;
    
        box.append(images,dic)
        container.append(box)
        
    });
    }

export {searchImages , appendData}