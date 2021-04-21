let counter = 0;
const hoofdArray = document.querySelectorAll(".dropdown > a");

window.addEventListener("keypress", (event) => {
    console.log(event)
    if (event.key === "e"){
        console.log("e")
        if (document.querySelectorAll("div :focus-within")){
            const activeArray = document.querySelectorAll("nav .active")
            if (activeArray.length > 0){
                activeArray.forEach(function(element){
                    element.classList.remove("active")
                })
            }
            document.activeElement.parentElement.childNodes[3].classList.toggle("active")
        }
    }
    else if (event.key === "q"){
        console.log("q")
        const activeArray = document.querySelectorAll("nav .active")
        if (activeArray.length > 0){
            activeArray.forEach(function(element){
                element.classList.remove("active")
            })
        }
    }
    else if (event.key === "d"){
        console.log("d")
        console.log(counter)
        counter++
        if (counter == (hoofdArray.length+1) || counter == 1){
            counter = 1
            hoofdArray[0].focus()
        } else {
            hoofdArray[--counter].focus()
            counter++
        }
        console.log(counter)
    }
    else if (event.key === "a"){
        console.log("a")
        console.log(counter)
        if (counter <= 0 || counter == hoofdArray.length){
            counter = hoofdArray.length-1
            hoofdArray[counter].focus()
            console.log(counter)
        } else {
            counter--
            hoofdArray[counter].focus()
            console.log(counter)
        }
    }
    // else if (event.key === "s"){
    //     currentElement = document.activeElement.parentElement
    //     console.log(currentElement)
    //     if (counter <= 0 || counter == hoofdArray.length){
    //         counter = hoofdArray.length-1
    //         hoofdArray[counter].focus()
    //         console.log(counter)
    //     } else {
    //         counter--
    //         hoofdArray[counter].focus()
    //         console.log(counter)
    //     }
    // }
   

        
        
     
    // if (first == document.activeElement){
    //     //select volgende element
    //     const second = document.querySelectorAll(".dropdown > a")[1]
    //     console.log(second)
    //     second.focus()
    // } 
    // else {
    //     first.focus()
    // }
})
