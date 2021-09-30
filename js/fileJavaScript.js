// alert("Hello");

// function output(){
//     console.log("Hello Javascript");
// }

// output();

// function scream(){
//     console.log("AAAAAAAAAAAAAAAAAAA!")
// }

// setTimeout(scream,2000);

function getData(){
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";
    fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch((err) => error(err));

}
function error(err){
    console.error("An error occured")
}

function processData(data){
   extractMRUData(data);
}

function extractMRUData(data){
   let MauData =  data.Mauritius.pop();
   console.log(MauData);
   $("#confirmed").innerHTML = MauData.confirmed;
   $("#deaths").innerHTML = MauData.deaths;
   $("#recovered").innerHTML = MauData.recovered;
   $("#date").innerHTML = MauData.date;
}
function $(el){
    return document.querySelector(el);
}

getData();






