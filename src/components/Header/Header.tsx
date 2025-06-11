import { useState } from 'react';
import { Nav } from '../Nav/Nav';
import { HeaderIcon } from './HeaderIcon/HeaderIcon';
import useIsMobile from '../../hooks/useIsMobile';    
import './_Header.scss'; 
export const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const { mobile } = useIsMobile();

  return (
    <header className='header spacing'>
        <div className='header__flex container'>
            <h1 className='header__heading'>🍴 What Can I Cook</h1>
            <HeaderIcon isActive={isActive} setIsActive={setIsActive} />
            {mobile ? (
              <>
                {isActive && <Nav />}
              </>
            ) : (
              <Nav />
            )}
        </div>
    </header>
  );
};
