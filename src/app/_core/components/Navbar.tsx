"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';

interface NavbarOptionProps {
  name: string;
  route: string;
  isSelected?: boolean;
  isDefault: boolean;
  onClick: (name:string) => void;
}

export default function Navbar( { currentPath } : { currentPath:string }) {
  const [currentScreen, setCurrentScreen] = useState(currentPath);

  const navbarOptions = [
    { name:"Work", isDefault:true },
    { name:"About" },
    { name:"Showcase" },
    { name:"Contact" },
  ]

  const handleChangeRoute = (newRoute:string) => {
    setCurrentScreen(newRoute);
  }
  
  return (
    <ul className='my-8 justify-center
                   flex flex-row space-x-4'>
      {navbarOptions.map((option) => {
        return <NavbarOption 
          key={option.name.toLowerCase()} 
          name={option.name} 
          route={`/${option.name.toLowerCase()}`} 
          isSelected={option.name === currentScreen}
          isDefault={option.isDefault ?? false} 
          onClick={handleChangeRoute}/>
      })}
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
        ${isSelected ? 'bg-primary' : ''}`
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