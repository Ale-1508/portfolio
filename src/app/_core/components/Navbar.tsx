"use client";
import Link from 'next/link';
import { useState } from 'react';

interface NavbarOptionProps {
  name: string;
  route: string;
  isSelected?: boolean;
  isDefault: boolean;
  onClick: (name:string) => void;
}

export default function Navbar() {
  const [currentScreen, setCurrentScreen] = useState("Work");

  const options = [
    { name:"Work", isDefault:true },
    { name:"About" },
    { name:"Showcase" },
    { name:"Contact" },
  ]

  const handleChangeRoute = (name:string) => {
    setCurrentScreen(name);
  }
  
  return (
    <ul className='my-8 justify-center
                   flex flex-row space-x-4'>
      {options.map((option) => {
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
    <li key={route}>
      <div 
        className={
          `w-auto px-5 py-1.5 
          flex flex-row gap-2
          rounded-3xl
          font-semibold
          text-secondary
          ${isSelected ? 'bg-primary' : ''}`
        }
      >
        <Link href={
            isDefault
            ? "/"
            : route
          }
          onClick={ (e)=>{
            e.preventDefault();
            onClick(name)
          } }
        >
          {name}
        </Link>
        {
          isDefault
          ? <div className='
              size-6 text-center
              rounded-md
              ring-gray-100-1
            bg-gray-200'
          >
              /
            </div> 
          : null
        }
      </div>
    </li>
  );
}