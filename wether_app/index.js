
    const my_api=`d5511f6d348ee1cd5a339b4e6fded882`;



    async function getData(){
        let user_city=document.getElementById(`city`).value;
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${user_city}&appid=${my_api}`
        
        let res= await fetch(url);
   
        let data= await res.json();
   
        console.log(data);
        append(data)
       
       }
   // getData()
   
   function append(data){
   
       let all = document.getElementById("cont")
       // cont.innerHTML=null;
       let box=document.createElement("div")
            
           let cityName=document.createElement("h3")
           cityName.innerText=data.name;
            
           let weIcone=document.createElement("img")
           weIcone.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   
           let temp1 = document.createElement("p")
           temp1.innerText=`current temp:${data.main.temp}`;
   
           let temp2 = document.createElement("p")
           temp2.innerText=`min temp:${data.main.temp_min}`;
   
           let temp3 = document.createElement("p")
           temp3.innerText=`max temp:${data.main.temp_max}`;
   
           box.append(weIcone,cityName,temp1,temp2,temp3);
           cont.append(box)
   
   
           let iframe=document.getElementById("gmap_canvas")
           iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
   }
   async function currentLocation(lat,lon){
        let loc=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${my_api}`;
        
        let res= await fetch(loc);
   
        let data= await res.json();
   
       //  console.log(data);
        append(data)
       
       }
   
   function getLocationWeather() {
     navigator.geolocation.getCurrentPosition(success);
     function success(position) {
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
       
         currentLocation(latitude,longitude)
       console.log(latitude);
       console.log(longitude);
     }
   }
   
   getLocationWeather()