import { Link } from 'react-router-dom';
import { HomeIcon, HeartIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import './_Nav.scss';

export const Nav = () => {
    return (
      <nav className="nav">
          <Link className='nav__link' to='/' >
            <HomeIcon className='nav__icon' /> 
            Home
          </Link>
          <Link className='nav__link' to='/favorites'>
            <HeartIcon className='nav__icon' />
            Favorites
          </Link>
          <button className='nav__theme'>
            <MoonIcon className='nav__icon' />
            Dark
          </button>
      </nav>
    );
};