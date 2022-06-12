import { navbar } from '/dist/navbar.js'
document.getElementById("navbar").innerHTML=navbar()

const api=`rqKKhIz64OH5t1a7dzNqVx8SP7CehVVJn5fbuvdFJEE `

import {searchImages,appendData} from './fetch.js'

// import axios from 'axios'

import '../stylesF/index.css'

let searchAny =(e)=>{

if (e.key==="Enter") {

    let value=document.getElementById("query").value;

   searchImages(api,value).then((data) => {

    console.log(data.results);
document.getElementById("container");
container.innerHTML=null;
    appendData(data.results,container)


    document.getElementById("pop").innerText=`Showing search ${value} results`
});
};
}
document.getElementById("query").addEventListener("keydown",searchAny)


let cate=document.getElementById("options").children;


function opSearch(){
    // console.log(this.id);
    searchImages(api,this.id).then((data) => {
    document.getElementById("container");
    container.innerHTML=null;
        appendData(data.results,container)
    document.getElementById("pop").innerText=`showing search ${this.id} results`
       });
}
for(let el of cate){
    el.addEventListener("click",opSearch)
}
