import { MdClearAll } from "react-icons/md";
import { MdBreakfastDining } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdOutlineDinnerDining } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { SiBurgerking } from "react-icons/si";







export const Category = [
    {
        id: 1,
        name: "All",
        image: <MdClearAll size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 2,
        name: "breakfast",
        image: <MdBreakfastDining size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 3,
        name: "soups",
        image: <LuSoup size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 4,
        name: "pasta",
        image: <MdClearAll size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 5,
        name: "main_course",
        image: <MdOutlineDinnerDining size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 6,
        name: "pizza",
        image: <FaPizzaSlice size={30} className="w-[60px] h-[60px] text-green-700" />,
    },
    {
        id: 7,
        name: "burger",
        image: <SiBurgerking size={30} className="w-[60px] h-[60px] text-green-700" />,
    },


]