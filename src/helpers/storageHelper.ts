// Guarda un valor en el localStorage bajo una clave específica
// Convierte el valor a string usando JSON.stringify (porque localStorage solo guarda strings)
export const setStorageItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Recupera un valor desde el localStorage usando una clave
// Usamos un genérico <T> para que TypeScript sepa qué tipo de dato esperar al devolverlo
// Si no existe nada en esa clave, devolvemos un array vacío como valor por defecto
export const getStorageItem = <T>(key: string): T | [] => {
    const item = localStorage.getItem(key);
    if(!item) return [];

     // Convertimos el string guardado nuevamente a su forma original (objeto, array, etc.)
    return JSON.parse(item) as T;
};

// Elimina un item de un array guardado en localStorage, buscando por su `id`
// Este tipo T debe ser un objeto que tenga una propiedad `id: number`
// Por eso usamos <T extends { id: number }> para asegurarnos de que el objeto tenga un `id`
export const removeStorageItem = <T extends { id: number }>(
    key: string, // clave donde está guardado el array en localStorage
    id: number  // id del elemento que queremos eliminar
): T[] => {

    const rawItem = localStorage.getItem(key); // recuperamos el string del storage
    if(!rawItem) return []; // si no existe nada, devolvemos un array vacío

    const parsedItem: T[] = JSON.parse(rawItem); // parseamos el string a un array de objetos del tipo T

     // filtramos todos los elementos menos el que tenga ese id
    const filteredItem = parsedItem.filter(e => e.id !== id);

    // guardamos el nuevo array filtrado de vuelta en el localStorage
    localStorage.setItem(key, JSON.stringify(filteredItem));

    // devolvemos el array actualizado
    return filteredItem;
};