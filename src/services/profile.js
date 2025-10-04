import { v4 as uuidv4 } from "uuid";
import icon1 from "../assets/svgs/Profile"
import icon2 from "../assets/svgs/Cart"
import icon3 from "../assets/svgs/Cancel"
import icon4 from "../assets/svgs/Star"
import icon5 from "../assets/svgs/LogOut"


export const profile = [
    {
        id: uuidv4(),
        icon: icon1,
        title: "Manage My Account",
        path: "/account"
    },
     {
        id: uuidv4(),
        icon: icon2,
        title: "My Order"
    },
     {
        id: uuidv4(),
        icon: icon3,
        title: "My Cancellations"
    },
     {
        id: uuidv4(),
        icon: icon4,
        title: "My Reviews"
    },
     {
        id: uuidv4(),
        icon: icon5,
        title: "Logout"
    },
]