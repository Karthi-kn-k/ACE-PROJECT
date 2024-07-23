function sidebar(){
    var control=document.querySelector(".control")
    control.style.display="block"
    var menu=document.getElementById("menu")
    menu.style.display="none"
    var cancel=document.getElementById("cancel")
    cancel.style.display="block"
}
function closebar(){
    var control=document.querySelector(".control")
    control.style.display="none"
    var menu=document.getElementById("menu")
    menu.style.display="block"
    var cancel=document.getElementById("cancel")
    cancel.style.display="none"
}