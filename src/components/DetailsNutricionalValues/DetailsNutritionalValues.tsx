import { useAppStore } from '../../stores/useAppStore';
import './_DetailsNutritionalValues.scss'

export const DetailsNutricionalValues = () => {

    const recipeDetails = useAppStore((state) => state.recipeDetails);
    return (
      <div className="nutriotional">
        <div className="nutriotional__info">
            <h3>Nutritional  Values</h3>
            {recipeDetails.data.nutrition.nutrients.map(e => (
              <p key={e.name} className="nutriotional__values">{e.name}: <span>{e.amount}{e.unit}</span></p>
            ))}
        </div>
        <button className="nutriotional__buttonFavorite">Favorite Recipe</button>
      </div>
      
    );
};
