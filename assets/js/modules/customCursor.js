const customCursor = () => {
    const customCursor = document.getElementById("custom-cursor");

    if (!customCursor) return;

    document.addEventListener("mousemove", (e) => {
        customCursor.style.top = `${e.clientY}px`;
        customCursor.style.left = `${e.clientX}px`;
    });
};


export { customCursor }