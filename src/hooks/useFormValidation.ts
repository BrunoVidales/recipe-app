import { MouseEvent, useState, Dispatch, SetStateAction } from "react";
const validate = {
    text: 'Enter ingredients separated by commas (example: tomato,onion,garlic)',
    isValidate: true
};

type IngredientsType = {
    ingredient: string;
};

type UseFormValidationProps = {
    ingredients: IngredientsType;
    setIngredients: Dispatch<SetStateAction<IngredientsType>>
};

const useFormValidation = ({ingredients, setIngredients}: UseFormValidationProps) => {

    const { ingredient } = ingredients;


    // Manejo de errores personalizado
    const [errorMessage, setErrorMessage] = useState(validate);
    
    const inputValidation = () => {

        // Obtengo el valor y limpio de espacios
        let inputText = ingredient.trim().toLowerCase();

        // Validacion de input vacio
        if(inputText === '') {
            setErrorMessage({
                text: 'Please enter at least one ingredient',
                isValidate: false
            });
            return;
        }
        
        // Validacion con expresion regular
        const regex = /^[a-zA-Z\s,]+$/;
        const validateText = regex.test(inputText);
        if(!validateText) {
            setErrorMessage({
                text: 'Please use letters only. Numbers and special characters are not allowed',
                isValidate: false
            });
            return;
        };

        let inputArray = inputText.split(',').map(e => e.trim()).filter(e => e !== '');
        console.log(inputArray)
        if(inputArray.length === 0) {
            setErrorMessage({
                text: "Please enter at least one valid ingredient",
                isValidate: false
            });
            return;
        };

        setErrorMessage(validate);

        inputText = inputArray.join(',');
        console.log(inputText)
    }

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputValidation()
    };

    return {
        handleSubmit,
        errorMessage
    }
};

export default useFormValidation;