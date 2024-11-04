"use client"

import { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCircleInfo, faCheck } from '@fortawesome/free-solid-svg-icons';

interface SmallTextfieldProps {
  startValue?: string
  hint?: string
  inputType?: string
  required ?: boolean
  icon: IconDefinition | undefined
}

export const SmallTextfield = ( { startValue="", hint="", inputType="text", required=false, icon }: SmallTextfieldProps ) => {
  const [ state, setState ] = useState({
    value: startValue,
    trailingIcon: {
      name: faCircleInfo,
      show: false
    }
  });

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({...prevState, value:e.target.value}));
  }
  
  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState, 
      trailingIcon: { ...prevState.trailingIcon, show: false, name: faCircleInfo }
    }));
  }
  
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
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
      flex flex-row items-center
      pl-4 pr-2 rounded-2xl
      text-md lg:text-lg font-normal 
      text-primary-600
      bg-white
      focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
    ">
      { icon!==undefined && <FontAwesomeIcon icon={icon} /> }
      <input 
        type={inputType}
        value={state.value}
        placeholder={hint}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        required={required}
        className="
          px-4 py-2 w-96
          bg-transparent
          text-md lg:text-lg font-normal 
          text-primary-600
          placeholder-primary-400 placeholder-font-normal
          focus:outline-none
          "
      />
      <FontAwesomeIcon icon={state.trailingIcon.name} className={state.trailingIcon.show ? "inline" : "hidden"}/>
    </div>
  )
}