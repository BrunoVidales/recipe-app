import { useAppStore } from "../../stores/useAppStore";
import { Cards } from "../Cards/Card/Card";
import { Loading } from "../Loading/Loading";


import './_RecipesFound.scss';

export const RecipesFound = () => {
  const recipes = useAppStore(state => state.recipes);
   const isLoading = useAppStore((state) => state.isLoading);
  
  if(isLoading) return <Loading />
  
 

  return (
    <section className="recipesFound spacing">
        <h2>Recipes Found</h2>
        {recipes && recipes.results.length ? (
          <Cards />
        ) : (
          <div className="recipesFound__empty">
            <img src="/plateWhite.png" alt="Oops! No recipes here yet. Maybe it's time to get cooking!" />
            <p>Oops! No recipes here yet. Maybe it's time to get cooking!</p>
          </div>
        )}
        
    </section>
  );
};
