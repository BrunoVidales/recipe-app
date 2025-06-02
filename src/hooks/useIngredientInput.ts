import { useState, ChangeEvent } from "react";

const useIngredientInput = () => {

    const [ingredients, setIngredients] = useState({
        ingredient: ''
    });


    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setIngredients({
        ...ingredients,
        [e.target.name]: e.target.value
        });
    };


    return {
        ingredients,
        setIngredients,
        handleChangeInput
    };
};

export default useIngredientInput;