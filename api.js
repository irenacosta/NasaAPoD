let req = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "yJ3nTj6AarVzzFWpx5MLybGEHZ0ZBSfpbrh1mbR2";

function buscarImagem (){
    document.getElementById("buscaImagem").button = "voltei!"
}

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", (function(buscarImagem) {
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
    document.getElementById("buscaImagem").addEventListener("click", buscarImagem);
    
    
    }
    }
))
buscarImagem()