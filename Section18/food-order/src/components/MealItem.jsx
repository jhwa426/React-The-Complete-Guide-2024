import React, { useContext } from 'react'
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
// import { currencyFormatter } from "../util/formatting.js;"

const MealItem = ({ meal }) => {
    const cartContext = useContext(CartContext);

    const handleAddMealToCart = () => {
        cartContext.addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {/* {currencyFormatter.format(meal.price)} */}
                        ${meal.price}
                    </p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    );
}

export default MealItem;