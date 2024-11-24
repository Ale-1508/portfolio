"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavbarOptionProps {
  name: string;
  route: string;
  isSelected?: boolean;
  isDefault: boolean;
  onClick: (name:string) => void;
}

const navbarOptions = [
  { name:"Work", isDefault:true },
  { name:"About" },
  { name:"Showcase" },
  { name:"Contact" },
]


const CollapsedNavbar = ( { currentPath } : { currentPath:string } ) => {
  const [currentScreen, setCurrentScreen] = useState(currentPath);
  const [showOptions, setShowOptions] = useState(false)

  const handleChangeRoute = (newRoute:string) => {
    setCurrentScreen(newRoute);
  }

  return(
    <div className={`flex flex-col gap-4`}>
      <div className={`
        w-full flex px-4 
        justify-end items-center
      `}>
        <FontAwesomeIcon size="xl" icon={faBars} onClick={() => { setShowOptions(!showOptions)}}/>
      </div>
      {
        <ul className={` 
          justify-center
          flex-col sm:flex-row 
          flex gap-4 my-0
        `}>
          { showOptions && navbarOptions.map((option) => {
              return <NavbarOption 
                key={option.name.toLowerCase()} 
                name={option.name} 
                route={`/${option.name.toLowerCase()}`} 
                isSelected={option.name === currentScreen}
                isDefault={option.isDefault ?? false} 
                onClick={handleChangeRoute}/>
            })
          }
        </ul>
      }
    </div>
  )
}


export default function Navbar( { currentPath } : { currentPath:string } ) {
  const [currentScreen, setCurrentScreen] = useState(currentPath);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  const handleChangeRoute = (newRoute:string) => {
    setCurrentScreen(newRoute);
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])
  
  return (
    <ul className={`mt-8 sm:mb-8
      justify-center
      flex-col sm:flex-row 
      flex gap-4
    `}>
      {
        windowSize.width <= 640
        ? <CollapsedNavbar currentPath={currentPath}/>
        : navbarOptions.map((option) => {
          return <NavbarOption 
            key={option.name.toLowerCase()} 
            name={option.name} 
            route={`/${option.name.toLowerCase()}`} 
            isSelected={option.name === currentScreen}
            isDefault={option.isDefault ?? false} 
            onClick={handleChangeRoute}/>
        })
      }
    </ul>
  );
}

const NavbarOption = ( {name, route, isDefault, isSelected=false, onClick}: NavbarOptionProps ) => {
  return(
    <li key={route}
      className={
        `w-auto px-5 py-1.5 
        rounded-3xl
        font-semibold
        text-secondary
        selection:bg-primary-200
        ${isSelected ? 'bg-primary-300 selection: bg-opacity-25' : ''}`
      }
    >
      <Link 
        className='flex flex-row gap-2'
        href={
          isDefault
          ? "/"
          : route
        }
        onClick={ ()=>{
          onClick(name)
        } }
      >
        {name}
        {
          isDefault
          ? <div className='
              size-6 text-center
              rounded-md
              select-none
              ring-gray-100-1
            bg-gray-200'
          >
              /
            </div> 
          : null
        }
      </Link>
    </li>
  );
}