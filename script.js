
let api_key = "d30efb53eee899a838d470abc2667c88";
let urlBase = "https://api.openweathermap.org/data/2.5/weather"
let difKelvin = 273.15;

document.getElementById("botonBusqueda")?.addEventListener("click", ()=> {
    const ciudad = document.getElementById("ciudadEntrada").value;
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`) //&lang=es
    .then(data  => data.json() )
    .then(data => mostrarDatosClima(data))

}


function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML= "";
    const nombreCiudad = data.name;
    const nombrePais = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const velocidadViento = data.wind.speed;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;
    

    const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`;

    const temperaturaInfo = document.createElement("p")
    temperaturaInfo.textContent= `Temperature: ${Math.floor(temperatura - difKelvin)} °C`;

    const humedadInfo = document.createElement("p")
    humedadInfo.textContent= `Humidity: ${humedad} %`;

    const vientoVelInfo = document.createElement("p")
    vientoVelInfo.textContent = `Wind speed: ${Math.floor(velocidadViento*1.609)} Km/hr`;

    const descripcionInfo = document.createElement("p")
    descripcionInfo.textContent = descripcion;

    const iconoInfo = document.createElement("img")
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(vientoVelInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}



