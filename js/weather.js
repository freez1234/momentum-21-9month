const API_KEY="2cfcc749b85be9c313a51b7627d5f08b" //https://openweathermap.org/


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url)
.then(response => response.json())
.then(data => {
    const weather=document.querySelector("#weather span:first-child");
    const city=document.querySelector("#weather span:last-child");
    city.innerText = `현위치:${data.name}`;
    weather.innerText=`날씨:${data.weather[0].main}  온도:${data.main.temp}`;
    
});

}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
