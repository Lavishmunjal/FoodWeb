import React, { createContext } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();

const UserContext = ({ children }) => {

    const [input, setInput] = React.useState("");
    const [selectedCategory, setSelectedCategory] = React.useState(food_items);
    const [showcard, setShowcard] = React.useState(false);

    const user = {
        input,
        setInput,
        selectedCategory,
        setSelectedCategory,
        showcard,
        setShowcard
    };
  return (
    <dataContext.Provider value={{ input, setInput, selectedCategory, setSelectedCategory, showcard, setShowcard }}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext