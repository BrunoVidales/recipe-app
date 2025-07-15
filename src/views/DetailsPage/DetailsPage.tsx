import { useEffect } from 'react';
import { DetailsNutricionalValues } from '../../components/DetailsNutricionalValues/DetailsNutritionalValues';
import useIsMobile from '../../hooks/useIsMobile';
import { useAppStore } from '../../stores/useAppStore';
import './_DetailsPage.scss';
import { validImage } from '../../utils/validateImage';
import { Loading } from '../../components/Loading/Loading';


export const DetailsPage = () => {
  const { mobile } = useIsMobile();

  const recipeDetails = useAppStore((state) => state.recipeDetails);
  const setRecipeDetailsStorage = useAppStore((state) => state.setRecipeDetailsStorage);
  const isLoading = useAppStore((state) => state.isLoading);
  
  const processedIngredients = recipeDetails.ingredients.map(e => {
    const src = validImage(e.image)
    return {
      title: e.name,
      image: src,
      unit: e.amount.metric.unit,
      value: e.amount.metric.value
    };
  });
  

   useEffect(() => {
        if(!recipeDetails.data.title) {
            setRecipeDetailsStorage()
        }
    }, [recipeDetails]);

    if(isLoading) return <Loading />;

  return (  
    <section className="spacing details"> 
      <h2>{recipeDetails.data.title}</h2>
      <div className="details__nutrionalInfo">
        <div className="details__img">
          <img className='img__blur' src={`https://img.spoonacular.com/recipes/${recipeDetails.data.id}-636x393.jpg`} alt={`image ${recipeDetails.data.title}`} />
          <img className='img__main' src={`https://img.spoonacular.com/recipes/${recipeDetails.data.id}-636x393.jpg`} alt={`image ${recipeDetails.data.title}`} />
        </div>
        {!mobile && <DetailsNutricionalValues />}
      </div>

      <div className="details__ingredients">
        <h3>Ingredients</h3>
        <ul className='details__list'>
          {processedIngredients.map((e, i) => (
            <li key={i} className='details__ingredient'>
              <img
                src={e.image} 
                alt={e.title} 
                className='details__img-ingredient'
              />
              <p>{e.title}</p>
              <p>{e.value}<span>{e.unit}</span></p>
            </li> 
          ))}
         </ul>
      </div>
      <div
        className='details__summary'
        dangerouslySetInnerHTML={{__html: recipeDetails.data.summary}}
      ></div>
      { mobile && <DetailsNutricionalValues />}
    </section>
  );
};
   