const defaultButton = document.getElementById("default-button");
defaultButton.addEventListener('click', () => {
    
    const canvasContainer = document.getElementById("canvas-container");

    for (var i = 0; i < 16; i++){
        const div = document.createElement("div");
        div.classList.add("canvasGrid");
        canvasContainer.appendChild(div);
    }

    const canvasGridStyle = document.querySelectorAll('.canvasGrid');
    canvasGridStyle.forEach( function (item) {
        item.setAttribute('style','display: flex; flex: 1;')

        for (var i = 0; i < 16; i++){
            const div = document.createElement("div");
            div.classList.add("gridItem");
            item.appendChild(div);
        }

        const gridItemStyle = document.querySelectorAll('.gridItem')
        gridItemStyle.forEach( function(item) {
            item.setAttribute('style','flex-grow: 1; border: 2px solid blue')
        })

    })

});