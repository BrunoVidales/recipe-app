
import { DetailsNutricionalValues } from '../../components/DetailsNutricionalValues/DetailsNutritionalValues';
import useIsMobile from '../../hooks/useIsMobile';
import './_DetailsPage.scss';

export const DetailsPage = () => {

  const { mobile } = useIsMobile();

  return (
    <section className="spacing details"> 
      <h2>Salad</h2>
      <div className="details__nutrionalInfo">
        <div className="details__img">
          <img src="./unsplash.png" alt="imagen" />
        </div>
        {!mobile && <DetailsNutricionalValues />}
      </div>

      <div className="details__ingredietns">
        <h3>Ingredients</h3>
        <p>200g Spaghetti</p>
        <p>100g Pancetta</p>
        <p>2 large eggs</p>
        <p>50g Parmesan cheese</p>
        <p>2 cloves of garlic</p>
        <p>Salt and pepper to taste</p>
      </div>   
      { mobile && <DetailsNutricionalValues />}
    </section>
  );
};
   