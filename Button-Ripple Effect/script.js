const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (result)=>{
    const x = (result.pageX - btnEl.offsetLeft);
    const y = (result.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})