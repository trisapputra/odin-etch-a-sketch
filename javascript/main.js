const defaultButton = document.getElementById("default-button");
defaultButton.addEventListener('click', () => {
    
    const canvasContainer = document.getElementById("canvas-container");

    // while loops prevent grid item recursion
    while(canvasContainer.firstChild) {
        canvasContainer.removeChild(canvasContainer.firstChild);
    }


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
            item.setAttribute('style','flex-grow : 1; border : 0.5px solid skyblue')
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = 'red';
            })
        })

    })

})


const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', () => {
    
    const inputValue = document.getElementById('input-value')

    console.log(typeof(Number(inputValue.value)));

    // // while loops prevent grid item recursion
    // while(canvasContainer.firstChild) {
    //     canvasContainer.removeChild(canvasContainer.firstChild);
    // }

    
    // for (var i = 0; i < 16; i++){
    //     const div = document.createElement("div");
    //     div.classList.add("canvasGrid");
    //     canvasContainer.appendChild(div);
    // }

    // const canvasGridStyle = document.querySelectorAll('.canvasGrid');
    // canvasGridStyle.forEach( function (item) {
    //     item.setAttribute('style','display: flex; flex: 1;')

    //     for (var i = 0; i < 16; i++){
    //         const div = document.createElement("div");
    //         div.classList.add("gridItem");
    //         item.appendChild(div);
    //     }

    //     const gridItemStyle = document.querySelectorAll('.gridItem')
    //     gridItemStyle.forEach( function(item) {
    //         item.setAttribute('style','flex-grow : 1; border : 0.5px solid skyblue')
    //         item.addEventListener('mouseover', () => {
    //             item.style.backgroundColor = 'red';
    //         })
    //     })

    // })

})