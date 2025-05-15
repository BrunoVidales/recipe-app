import './_DetailsNutritionalValues.scss'

export const DetailsNutricionalValues = () => {

  return (
    <div className="nutriotional">
      <div className="nutriotional__info">
          <h3>Nutritional  Values</h3>
          <p className="nutriotional__values">Calories: <span>400 Kcal</span></p>
          <p className="nutriotional__values">Protein: <span>20g</span></p>
          <p className="nutriotional__values">Carbohydrates: <span>45g</span></p>
      </div>
      <button className="nutriotional__buttonFavorite">Favorite Recipe</button>
    </div>
    
  );
};
