
const switchArrowScroll = () => {

    
    const divSeeMyWork = document.getElementById("see-my-work")

    if (window.innerWidth >= 768) {
       

        const divArrowRight = document.createElement("div")
        divArrowRight.id = "icon-arrow-right"
        divArrowRight.classList.add("shake-horizontal")
        divSeeMyWork.append(divArrowRight)

        const iconArrowRight = document.createElement("i")
        iconArrowRight.classList.add("fa-solid")
        iconArrowRight.classList.add("fa-circle-chevron-right")
        divArrowRight.append(iconArrowRight)
    } 
}

export {switchArrowScroll}

