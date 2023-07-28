const headerEvent =document.querySelector(".header_botton")
headerEvent.addEventListener("scroll", ()=>{
    if (headerEvent.scrollTop > 51) {
        headerEvent.style.background-color = "black";
    } else {
        headerEvent.style.background-color = "none";
    }
})
