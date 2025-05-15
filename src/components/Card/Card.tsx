import { Link } from 'react-router-dom';
import './_Card.scss';


export const Cards = () => {
  return (
    <div className="card">
        <img src="/unsplash.png" alt="imagen" />
        <div className='card__info'>
            <h3>Salad</h3>
            <p>fresh and ealthy salad</p>
            <Link className="card__buttonLink" to='/details'>
              View Details
            </Link>
        </div>
    </div>
  );
};
