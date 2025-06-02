import { useAppStore } from '../../stores/useAppStore';
import { Link } from 'react-router-dom';
import './_Card.scss';


export const Cards = () => {

  const recipes = useAppStore((state) => state.recipes);
  
  return (
    <>
      {
        recipes.results.map(recipe => (
          <div key={recipe.id} className="card">
            <img src={`${recipe.image}`} alt={recipe.title} />
            <div className='card__info'>
              <h3>{recipe.title}</h3>
              <Link className="card__buttonLink" to='/details'>
                View Details
              </Link>
            </div>
          </div>
        ))
      }
    </>
    
  );
};
