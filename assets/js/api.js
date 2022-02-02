// const url = 'https://api.nasa.gov/planetary/apod?api_key='
// const api_key = 'yJ3nTj6AarVzzFWpx5MLybGEHZ0ZBSfpbrh1mbR2'

// const fetchNASAData = async () => {
//     try {
//         const response = await fetch(`${url}${api_key}`)
//         const data = await response.json()
//         console.log('NASA APOD data', data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const displayData = data => {
//     document.getElementById('title').textContent = data.title
//     document.getElementById('date').textContent = data.date
//     document.getElementById('picture').textContent = data.hdurl
//     document.getElementById('explanation').textContent = data.explanation
// }

// fetchNASAData()

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