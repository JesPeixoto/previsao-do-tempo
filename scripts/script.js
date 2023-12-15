
const key = "a2fb580928014179090808d1388042e4"


function createDataScreen(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto_prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img_prev").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarCidade(cidade) {  /* Função de buscar a cidade no servidor */

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lan=pt_br&units=metric`).then(resposta => resposta.json())
  
    createDataScreen(dados)
}


function clickButton () { /* Essa funciton tem a responsabilidade dela é pegar o INPUT */
    let cidade = document.querySelector(".input_city").value

    buscarCidade(cidade)
    
}