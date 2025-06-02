import { Filters } from "../types";

export default function cleanFormData(formData: Filters) {
    const result = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== '')
    );
    
    return result;

};