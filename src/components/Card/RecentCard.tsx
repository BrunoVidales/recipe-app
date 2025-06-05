import { useEffect } from "react";
import { useAppStore } from "../../stores/useAppStore"
import { Link } from "react-router-dom"

export const RecentCard = () => {

    const recipes = useAppStore((state) => state.recipes);
    const recent = useAppStore((state) => state.recent);
    const setRecentFromStorage = useAppStore((state) => state.setRecentFromStorage);
    useEffect(() => {
        if(localStorage.getItem('recent') === null) {
            return;
        };
        setRecentFromStorage(JSON.parse(localStorage.getItem('recent')!));
    }, [recipes])
    

    return (
        <>
            {
            recent.map((recipe) => (
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
        
    )
}
