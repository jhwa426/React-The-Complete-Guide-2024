import React, { useEffect, useState } from 'react'
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

const Meals = (props) => {
    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');

    //         if (!response.ok) {

    //         }
    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }

    //     fetchMeals();
    // }, []);

    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp("http://localhost:3000/meals", requestConfig, []);

    if (isLoading) {
        return <p className="center">Is Loading..</p>
    }

    if (error) {
        return <Error
            title="Failed to fetch data"
            message={error}
        />
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem
                    key={meal.id}
                    meal={meal}
                />
            ))}
        </ul>
    );
}

export default Meals;