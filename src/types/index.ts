import { dietsList } from "../data";

type DietsState = {
    checked: boolean;
    disabled: boolean;
};


export type DietsOption = typeof dietsList[number]; // El typeof devuelve el tipo de una variable, cuando pasamos los corchetes con el number, itera sobre el array devolviendo la union de tipos

export type DietsOptions = {
    [key in DietsOption]: DietsState;
};
