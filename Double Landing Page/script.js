const container = document.querySelector(".container");

const leftEl = document.querySelector(".left");

const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", ()=>{
    container.classList.add("active-left");
})

leftEl.addEventListener("mouseleave", ()=>{
    container.classList.remove("active-left");
})

rightEl.addEventListener("mouseenter", ()=>{
    container.classList.add("active-right");
})

rightEl.addEventListener("mouseleave", ()=>{
    container.classList.remove("active-right");
})