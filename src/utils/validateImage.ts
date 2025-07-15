export const validImage = (image?: string | null): string => {

    const fallBack = '/sadPlate.png';

    if(!image) return fallBack; // string vacía, null, undefined
    
    const extRegex = /\.(jpg|png)$/;
    
    const isInvalid = 
        image === 'no.jpg' ||
        !extRegex.test(image) || // no termina en archivo válido
        image.includes('img.spoonacular.'); // es solo parte de la URL

    if(isInvalid) return fallBack
    
    const cleaned = image.trim();

    return `https://spoonacular.com/cdn/ingredients_100x100/${cleaned}`;
};