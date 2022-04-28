const defaultButton = document.getElementById("default-button");
defaultButton.addEventListener('click', () => {
    
    const canvasContainer = document.getElementById("canvas-container");

    for (var i = 0; i < 16; i++){
        const div = document.createElement("div");
        div.classList.add("canvasGrid");
        canvasContainer.appendChild(div);
    }
});