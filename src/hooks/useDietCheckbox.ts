import { useState } from "react";
import { dietsList } from "../data";
import { DietsOption, DietsOptions } from "../types";

export const initialBuild = () => {
    return dietsList.reduce((acc, diet) => {
        acc[diet] = { // Asignación dinamica
            checked: false,
            disabled: false
        }
        return acc
    } , {} as DietsOptions); // Aserción de tipos  
};
 
const useDietCheckbox = () => {
    const [selectDiets, setSelectDiets] = useState(initialBuild());

    const handleChangeCheckbox = (diet: DietsOption) => {
        setSelectDiets(prev => ({
            ...prev,
            [diet]: {
                ...prev[diet],
                checked: !prev[diet].checked
            }
        }));

        if(diet.includes('Gluten Free')) {
            return;
        };
        checkboxActive(diet);
        
    };

    const checkboxActive = (dietSelected: DietsOption) => {
            dietsList.filter(diet => diet !== dietSelected && diet !== 'Gluten Free').forEach(diet => {
                setSelectDiets(prev => ({
                ...prev,
                [diet]: {
                    ...prev[diet],
                    disabled: !prev[diet].disabled
                }
            }));
        });     
    };


    return {
        selectDiets,
        setSelectDiets,
        handleChangeCheckbox
    };
};

export default useDietCheckbox;