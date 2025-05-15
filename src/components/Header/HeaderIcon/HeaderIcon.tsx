import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './_HeaderIcon.scss';

type HeaderIconProps = { 
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

export const HeaderIcon = ({ isActive, setIsActive } : HeaderIconProps) => {
    
    const handleClick = () => {
        setIsActive(!isActive);
      };

    const iconsProps = {
        className: 'icon',
        onClick: handleClick
      };


  return (
    <>
        {isActive ? (
            <XMarkIcon 
            {...iconsProps}
            />
        ) : (
            <Bars3Icon 
            {...iconsProps}
            />
        )}
    </>
  );
};
