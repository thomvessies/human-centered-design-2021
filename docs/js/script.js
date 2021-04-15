window.addEventListener("keypress", (event) => {
    if (event.key === "a" && document.activeElement.parentElement){
        console.log("check");
        if (document.querySelectorAll("div :focus-within")){
            document.activeElement.parentElement.childNodes[2].classList.toggle("active")
        }

        // if (x.className="dropdown"){
        //     x.classList.toggle("dropdown-content")
        // }
    }
})
