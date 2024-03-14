
const myFunction2 = (title2, img2, img3,img4, paragraph1,paragraph2,paragraph3, button3, button4, button5)=> {
    let div = document.createElement("div")

    div.innerHTML = `<div class = "style2">

                        <div class = "p1">
                            <img src ="./images/${img2}"></img>
                            <p>${paragraph1}</p>
                            <button>${button3}</button>
                        </div>
                        <div class = "p1">
                            <img src ="./images/${img3}"></img>
                            <p>${paragraph2}</p>
                            <button>${button4}</button>
                        </div>
                        <div class = "p1">
                            <img src ="./images/${img4}"></img>
                            <p>${paragraph3}</p>
                            <button>${button5}</button>  
                        </div>
                    </div>`
    return div
}

export {myFunction2}