import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from '../utils/formatting';

function MealCard({ meal, image }) {

    const { cart, dispatchCart } = useContext(CartContext);

    const handleOnAddMeal = () => {
        dispatchCart({ type: 'ADD', payload: meal.id });
    }

    return (
        <li className="meal-item">
            <article>
                <img src={image} alt="Imagen de la comida" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price ">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <button className="button" onClick={handleOnAddMeal}>Add to Cart</button>
                </div>
            </article>
        </li>
    );
}

export default MealCard
