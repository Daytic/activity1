
const myimage = (img1) => {
    let div = document.createElement("div")
    div.className="pic"
    div.innerHTML = `<div class = "img1">
    <img src ="./images/${img1}"></img></div>`


    return div
}

export {myimage}