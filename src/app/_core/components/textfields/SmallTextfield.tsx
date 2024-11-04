"use client"

import { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SmallTextfieldProps {
  startValue?: string
  hint?: string
  inputType?: string
  required ?: boolean
  icon: IconDefinition | undefined
}

export const SmallTextfield = ( { startValue="", hint="", inputType="text", required=false, icon }: SmallTextfieldProps ) => {
  const [value, setValue ] = useState(startValue);

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className="
      flex flex-row items-center
      pl-4 rounded-2xl
      text-md lg:text-lg font-normal 
      text-primary-600
      bg-white
      focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
    ">
      { icon!==undefined && <FontAwesomeIcon icon={icon} /> }
      <input 
        type={inputType}
        value={value}
        placeholder={hint}
        onChange={handleChange}
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
    </div>
  )
}