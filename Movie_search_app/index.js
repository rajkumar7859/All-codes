// const api= `https://omdbapi.com/?apikey=3015d72d&t=${name}`

async function getData(){
    let movieNames=document.getElementById(`movie`).value;

    //  let link=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api key}`
    let url=`https://omdbapi.com/?apikey=3015d72d&t=${movieNames}`;
    
    let res= await fetch(url);

    let data= await res.json();

    console.log(data);
    append(data)
   }
// getData()

   function append(data){
   
    if (data.Title) {
        
        let all = document.getElementById("container")
        container.innerHTML=null;
        
        let box=document.createElement("div")
            
           let movieName=document.createElement("h2")
           movieName.innerText=`Movie Name:- ${data.Title}`;
   
           let image = document.createElement("img")
           image.src=`${data.Poster}`;
   
           let released = document.createElement("p")
           released.innerText=`Released date:-${data.Released}`;
   
           let rating = document.createElement("p")
           rating.innerText=`IMDB Rating:-${data.imdbRating}`;
   
           box.append(image,movieName,rating,released);
           all.append(box)
    //    console.log(image,movieName,rating,released);
    }
    else
    {
        showError()
    }

    }
    function showError() {
        let container = document.getElementById('container');
        container.innerHTML = null; // Clear container
        
        let errImage = document.createElement('img');
        errImage.src = 'https://media0.giphy.com/media/kc6o9va9iOYmj7OOYv/giphy.gif';
        errImage.alt = 'Error';
        container.append(errImage);
    }

// src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
// src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"