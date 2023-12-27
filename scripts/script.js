// Chave de API para autenticação na OpenWeatherMap
const key = "a2fb580928014179090808d1388042e4"

// Função para atualizar a tela com os dados de clima
function createDataScreen(dados) {
    console.log(dados)

     // Atualiza os elementos HTML com as informações do clima
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto_prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img_prev").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

// Função assíncrona para buscar dados de uma cidade na OpenWeatherMap
async function buscarCidade(cidade) {  // Função de buscar a cidade no servidor, API da OpenWeatherMap //

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lan=pt_br&units=metric`).then(resposta => resposta.json())
  
    // Chama a função para atualizar a tela com os dados obtidos
    createDataScreen(dados)
}

// Função chamada quando o botão é clicado para buscar informações da cidade
function clickButton () { 
     // Obtém o valor inserido no campo de input
    let cidade = document.querySelector(".input_city").value

    // Chama a função para buscar e exibir informações do clima para a cidade inserida
    buscarCidade(cidade)
    
}