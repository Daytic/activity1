import { myimage } from "./img.js"
import { myFunction } from "./info.js"
import { myFunction2 } from "./card.js"

let myObject = {
    title: "Daytic, Liza Mae C.",
    paragraph : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! Quidem blanditiis assumenda cum placeat harum nihil praesentium nemo sit numquam quo quos culpa rem, incidunt consequatur magni ab!",
    img1: "img1.jpg",
    button1: "Contact me"
}

let myObject2 = {
    title2: "Project Completed",
    img2:"img2.jpg",
    img3:"img3.jpg",
    img4:"img4.jpg",
    paragraph1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! ",
    paragraph2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore!",
    paragraph3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sed inventore! ",
    button3: "Learn More",
    button4: "Learn More",
    button5: "Learn More"
}

const {title, paragraph, img1, button1} = myObject
let sectionOne = document.getElementById("sectionOne")
const  {title2, img2, img3, img4, paragraph1,paragraph2,paragraph3, button3, button4, button5} = myObject2
let sectionTwo = document.getElementById("sectionTwo")
sectionOne.append(myFunction(title, paragraph, button1))
sectionOne.append(myimage(img1))
sectionTwo.append(myFunction2(title2, img2, img3, img4, paragraph1,paragraph2,paragraph3, button3, button4, button5))