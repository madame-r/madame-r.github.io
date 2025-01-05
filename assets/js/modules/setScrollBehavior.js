


const mainElement = document.querySelector('main');

const scrollHorizontal = (evt) => {
    evt.preventDefault();
    mainElement.scrollLeft += evt.deltaY;
}

const scrollVertical = (evt) => {
    mainElement.scrollTop += evt.deltaY;
}

const setScrollBehavior = () => {
    if (window.innerWidth > 768) {
        // Large screen: horizontal scroll
        mainElement.removeEventListener('wheel', scrollVertical);
        mainElement.addEventListener('wheel', scrollHorizontal);
    } else {
        // Small screen: vertical scroll
        mainElement.removeEventListener('wheel', scrollHorizontal);
        mainElement.addEventListener('wheel', scrollVertical);
    }
}



export {setScrollBehavior}