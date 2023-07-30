let div=document.querySelector("div")
div.addEventListener("mousemove",(e)=>{
    e.target.parentElement.style.backgroundColor=`rgb(${e.offsetX} , ${e.offsetY} , ${e.offsetX - e.offsetY})`
    e.target.style.borderRadius=`${Math.round(e.offsetX) - 70}px`
})