const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImages();
});

let imgNUm = 10;

function addNewImages(){
  for (let index = 0; index < imgNUm; index++) {
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;
        containerEl.appendChild(newImage);
    
  }  
    
}

