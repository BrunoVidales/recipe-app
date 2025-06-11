import { useEffect } from "react";
import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useAppStore } from "../../../stores/useAppStore";
import { Link } from "react-router-dom";
import '../RecentCard/_RecentCard.scss';


export const RecentCard = () => {

    const recipes = useAppStore((state) => state.recipes);
    const recent = useAppStore((state) => state.recent);
    const setRecentFromStorage = useAppStore((state) => state.setRecentFromStorage);
    useEffect(() => {
        const stored = localStorage.getItem('recent');
        if(!stored) {
            return;
        };
        setRecentFromStorage(JSON.parse(stored));
    }, [recipes]);


   
    
    return (
        <>
            {
                recent.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="recentCard"
                            style={{ backgroundImage: `url(${recipe.image})` }}
                        >
                            <div className="recentCard__overlay"></div>
                            <div className="recentCard__actions">
                                <Link className="recentCard__action recentCard__action-eye" to='/details'>
                                    <EyeIcon />
                                </Link>
                                <button className="recentCard__action recentCard__action-trash">
                                    <TrashIcon />
                                </button>
                            </div>
                        <h3>{recipe.title}</h3>
                        </div>
                   
                ))
            }
        </>
        
    );
};
