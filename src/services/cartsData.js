import img1 from "../assets/firstimage.png"
import img2 from "../assets/secondimage.png"
import img3 from "../assets/thirdimage.png"
import img4 from "../assets/fourthumage.png"
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4(); 
export const cards = [
    {
        id:212,
        discount: 40,
        img: img1,
        title: "HAVIT HV-G92 Gamepad",
        price: 120,
        prevPrice: 160,
        ratings: 88,
        totalPrice:120
    },
    {
        id: 213,
        discount: 35,
        img: img2,
        title: "AK-900 Wired Keyboard",
        price: 960,
        prevPrice: 1160,
        ratings: 75,
        totalPrice:960
    },
    {
        id: 214,
        discount: 30,
        img: img3,
        title: "IPS LCD Gaming Monitor",
        price: 370,
        prevPrice: 400,
        ratings: 99,
        totalPrice:370
    },
      {
        id: 215,
        discount: 25,
        img: img4,
        title: "S-Series Comfort Chair ",
        price: 375,
        prevPrice: 400,
        ratings: 99,
        totalPrice: 375
    },
      {
        id: 216,
        discount: 25,
        img: img4,
        title: "S-Series Comfort Chair ",
        price: 375,
        prevPrice: 400,
        ratings: 99,
        totalPrice: 375
    }
]