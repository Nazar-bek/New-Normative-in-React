import { v4 as uuidv4 } from 'uuid';
import img1 from "../assets/bestfirts.png"
import img2 from "../assets/bestsecond.png"
import img3 from "../assets/bestthird.png"
import img4 from "../assets/bestfourth.png"
const id = uuidv4(); 
export const bestCarts = [
    {
        id:id,
        img: img1,
        title: "The north coat",
        price: 260,
        prevPrice: 360,
        ratings: 65,
    },
    {
        id: id,
        img: img2,
        title: "AGucci duffle bag",
        price: 960,
        prevPrice: 1160,
        ratings: 65,
    },
    {
        id: id,
        img: img3,
        title: "RGB liquid CPU Cooler",
        price: 160,
        prevPrice: 170,
        ratings: 65,
    },
      {
        id: id,
        img: img4,
        title: "Small BookSelf",
        price: 260,
        ratings: 65,
    },
]