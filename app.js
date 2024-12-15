const card = document.getElementById("cardSection")
const inputField = document.getElementById("input")

let search=()=>{
    
     const API_key = `https://newsapi.org/v2/everything?q=${inputField.value}&from=2024-11-14&sortBy=publishedAt&apiKey=4a12fe091de94f5ea55318c2ca9392e6`
    fetch(API_key)
    .then((res)=> res.json() )
    .then((data)=>{
    console.log(data.articles);
    
    data.articles.map((e,i)=>{
    console.log(e);
    card.innerHTML+=`<div class="card" style="width: 18rem;">
      <img src=${e.urlToImage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text">${e.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`  
    }) 
    })
    .catch((error)=>{
        console.log(error);
        
    })
}