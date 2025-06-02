import axios from "axios";

const api = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/"
});


export default api;