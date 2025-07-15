import { TrashIcon } from '@heroicons/react/24/solid';
import { useAppStore } from "../../../stores/useAppStore";
import { useEffect } from 'react';
import { ViewDetails } from '../ViewDetails/ViewDetails';

import '../RecentCard/_RecentCard.scss';

export const RecentCard = () => {

    
    const recent = useAppStore((state) => state.recent);
    const setRecentFromStorage = useAppStore((state) => state.setRecentFromStorage);
    const handleClearRecent = useAppStore((state) => state.handleClearRecent);

    useEffect(() => {
        setRecentFromStorage()
    }, [])
    

   
    
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
                                <ViewDetails text={false} id={recipe.id} />
                                <button className="recentCard__trash" onClick={() => handleClearRecent(recipe.id)}>
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
