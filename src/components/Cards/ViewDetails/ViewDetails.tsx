import { EyeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../../stores/useAppStore';
import { Recipes } from '../../../types';

import './_ViewDetails.scss';

type ViewDetailsType = {
    text: boolean;
    id: Recipes['results'][number]['id'];
};  

export const ViewDetails = ({ text, id } : ViewDetailsType ) => {

    const setRecipe = useAppStore((state) => state.setRecipe);
    const setRecipeDetailsStorage = useAppStore((state) => state.setRecipeDetailsStorage);

   

    return (    
        <Link to='/details' onClick={() => setRecipe(id)}>
            {text ? <button className='buttonLink'>View Details</button> : <EyeIcon className='eye' />}
        </Link>
    )
}
