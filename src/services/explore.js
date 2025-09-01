import img1 from "../assets/explore1.png";
import img2 from "../assets/explore2.png";
import img3 from "../assets/explore3.png";
import img4 from "../assets/explore4.png";
import img5 from "../assets/explore5.png";
import img6 from "../assets/explore6.png";
import img7 from "../assets/explore7.png";
import img8 from "../assets/explore8.png";
import { v4 as uuidv4 } from "uuid";

export const explore = [
  {
    id: uuidv4(),
    img: img1,
    title: "Breed Dry Dog Food",
    price: 100,
    rating: 35,
    new: false,
  },
  {
    id: uuidv4(),
    img: img2,
    title: "CANON EOS DSLR Camera",
    price: 360,
    rating: 95,
    new: false,
  },
  {
    id: uuidv4(),
    img: img3,
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 325,
    new: false,
  },
  {
    id: uuidv4(),
    img: img4,
    title: "Curology Product Set ",
    price: 500,
    rating: 145,
    new: false,
  },
  {
    id: uuidv4(),
    img: img5,
    title: "Kids Electric Car",
    price: 960,
    rating: 65,
    new: true,
    IsRadio: true,
    colors: ["#FB1314", "#DB4444",],
  },
   {
    id: uuidv4(),
    img: img6,
    title: "Jr. Zoom Soccer Cleats",
    price:1160,
    rating: 35,
    new: false,
    IsRadio: true,
    colors: ["#EEFF61", "#DB4444",],
  },
    {
    id: uuidv4(),
    img: img7,
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 55,
    new: true,
    IsRadio: true,
    colors: ["#000000", "#DB4444",],
    },
    {
    id: uuidv4(),
    img: img8,
    title: "Quilted Satin Jacket",
    price: 660,
    rating: 55,
    new: true,
    IsRadio: true,
    colors: ["#184A48", "#DB4444"]
    },
];
