import { createContext, useEffect, useState } from "react";


export const MealsContext = createContext([]);

const API = "http://localhost:3000";


function MealsProvider({ children }) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            const mealsPromise = await fetch(`${API}/meals`);
            const meals = await mealsPromise.json();
            setMeals(meals);
        }

        getMeals();
    }, [])

    return (
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    );
}

export default MealsProvider;
