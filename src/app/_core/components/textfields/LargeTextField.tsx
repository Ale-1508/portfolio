"use client"

import { useState, ChangeEvent } from "react";
import { IconDefinition, faCircleInfo, faCheck } from '@fortawesome/free-solid-svg-icons';

interface SmallTextfieldProps {
  startValue?: string
  hint?: string
  required ?: boolean
  icon?: IconDefinition | undefined
}

export const LargeTextField = ( { startValue="", hint="", required=false }: SmallTextfieldProps ) => {
  const [ state, setState ] = useState({
    value: startValue,
    trailingIcon: {
      name: faCircleInfo,
      show: false
    }
  });

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState(prevState => ({...prevState, value:e.target.value}));
  }
  
  const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState(prevState => ({
      ...prevState, 
      trailingIcon: { ...prevState.trailingIcon, show: false, name: faCircleInfo }
    }));
  }
  
  const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputOk = true;
    if (inputOk) {
      setState(prevState => ({
        ...prevState, 
        trailingIcon: { ...prevState.trailingIcon, show: true, name: faCheck }
      }));
    } else {
      setState(prevState => ({
        ...prevState, 
        trailingIcon: { ...prevState.trailingIcon, show: true }
      }));
    }
  }

  
  return (
    <div className="
      flex flex-row items-start h-48
      px-4 py-2 rounded-2xl
      text-md lg:text-lg font-normal 
      text-primary-600
      bg-white
      selectable-none hover:shadow-md
      focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
    ">
      <textarea 
        value={state.value}
        placeholder={hint}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        required={required}
        className="
          py-2 w-full h-full
          bg-transparent
          text-md lg:text-lg font-normal 
          text-primary-600
          placeholder-primary-400 placeholder-font-normal
          focus:outline-none
          overflow-hidden resize-none
        "
      />
    </div>
  )
}