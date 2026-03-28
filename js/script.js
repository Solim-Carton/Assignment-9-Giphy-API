console.log("script.js loaded");

const api_key = "8rwNU8NYG32323R2SqdlchBghNuy9J0m";

async function getGif() {
  const query = document.getElementById("search-input").value || "dogs"  
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
  const giphy = await response.json();

  console.log(giphy);

  const container = document.getElementById("gif-container");
  container.innerHTML = "";

  giphy.data.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    img.classList.add("col-md-3", "p-2");
    container.appendChild(img)
    
  });
  

}

document.getElementById("fetch-gif-btn").addEventListener("click", getGif);