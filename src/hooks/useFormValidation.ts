import { useAppStore } from "../stores/useAppStore";
import { MouseEvent, useState, Dispatch, SetStateAction } from "react";
import { DietsOptions, Filters } from "../types";
import cleanFormData from "../utils/cleanFormData";
import { initialBuild } from "./useDietCheckbox";


const validate = {
    text: 'Enter ingredients separated by commas (example: tomato,onion,garlic)',
    isValidate: true
};

type IngredientsType = {
    ingredient: string;
};

type UseFormValidationProps = {
    ingredients: IngredientsType;
    setIngredients: Dispatch<SetStateAction<IngredientsType>>;
    selectDiets: DietsOptions;
    setSelectDiets: Dispatch<React.SetStateAction<DietsOptions>>
};

const useFormValidation = ({ingredients, setIngredients, selectDiets, setSelectDiets}: UseFormValidationProps) => {


    const searchRecipes = useAppStore(state => state.searchRecipes);

    const { ingredient } = ingredients;

    // Manejo de errores personalizado
    const [errorMessage, setErrorMessage] = useState(validate);

    
    // Función para validar el input
    const inputValidation = () => {
        // Obtengo el valor y limpio espacios
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
        const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s,]+$/;
        const validateText = regex.test(inputText);
        if(!validateText) {
            setErrorMessage({
                text: 'Please use letters only. Numbers and special characters are not allowed',
                isValidate: false
            });
            return;
        };

        let inputArray = inputText.split(',').map(e => encodeURIComponent(e.trim())).filter(e => e !== '');
        
        if(inputArray.length === 0) {
            setErrorMessage({
                text: "Please enter at least one valid ingredient",
                isValidate: false
            });
            return;
        };

        setErrorMessage(validate);

        const result = inputArray.join(',');   
        return result;
    };
    

    // Filtrar tipo de dieta
    const getSelectedDiets = () => {
        const result = Object.keys(
            Object.fromEntries(
                Object.entries(selectDiets).filter(([_, value]) => value.checked)
            )
        ).join(',');
        return result;
    };

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const includeIngredients = inputValidation();
        const diet = getSelectedDiets();

        if(!includeIngredients) return; 

        // Setear el estado ingredients
        setIngredients({
            ingredient: ''
        });

        // Setear el estado de selectDiets
        setSelectDiets(initialBuild);


        // guardar datos
        const formData: Filters = {
            includeIngredients,
            diet,
        }

        searchRecipes(cleanFormData(formData));
        
    };

    return {
        handleSubmit,
        errorMessage
    }; 
};

export default useFormValidation;