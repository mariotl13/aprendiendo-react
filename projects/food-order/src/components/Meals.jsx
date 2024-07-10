
import { useContext } from "react";
import MealCard from "./MealCard";
import { MealsContext } from "../store/MealsContext";


const API = "http://localhost:3000";

function Meals() {

    const meals = useContext(MealsContext);

    return (
        <ul id="meals">
            {meals.map(meal => (
                <MealCard key={meal.id} meal={meal} image={`${API}/${meal.image}`}></MealCard>
            ))}
        </ul>
    );
}

export default Meals;
