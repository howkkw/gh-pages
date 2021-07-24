
function success(event){
    alert("Weater information will be displayed right-bottom!")
    const lat=event.coords.latitude
    const log=event.coords.longitude
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=98b84918bcd6f42b284152f8ae08d4a7&units=metric`
fetch(url).then(response => response.json()).then(data => {
    const weather=document.querySelector(".weather span:first-child")
    const city=document.querySelector(".weather span:nth-child(2)")
    const temp=document.querySelector(".weather span:last-child")
    weather.innerText=data.weather[0].main
    city.innerText=data.name
    temp.innerText=`${data.main.temp}℃`
})
}
function failed(){
    alert("I don't know where you are.")
}


navigator.geolocation.getCurrentPosition(success, failed)