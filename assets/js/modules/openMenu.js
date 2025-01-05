
const openMenu = (menuId, iconId) => {
    const menu = document.getElementById(menuId);  // Select the menu by its ID
    const iconMenu = document.getElementById(iconId);  // Select the menu icon by its ID

    iconMenu.addEventListener("click", () => {
        const isVisible = menu.style.display === "block";  // Check if menu is currently visible
        menu.style.display = isVisible ? "none" : "block";  // Toggle the visibility

        const icon = iconMenu.querySelector("i");  // Find the <i> tag inside the icon menu

        if (isVisible) {
            icon.classList.remove("fa-xmark");  // Change icon to bars
            icon.classList.add("fa-bars");
        } else {
            icon.classList.add("fa-xmark");  // Change icon to xmark
            icon.classList.remove("fa-bars");
        }
    });
}


export {openMenu}