"use client"

import classNames from "classnames";
import { useState, ChangeEvent } from "react";

interface LargeTextfieldProps {
  name: string,
  value?: string
  hint?: string
  required?: boolean
  minLenght?: number
  handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export const LargeTextField = ( { name, value="", hint="", minLenght=20, required=false, handleChange}: LargeTextfieldProps ) => {
  const valueLenght = value.length;
  const wordCounterClassNames = classNames(
    "transition duration-500 ease-out",
    ( valueLenght < minLenght ? "opacity-100" : "opacity-0" ),
    "w-full flex justify-end items-end  -ml-1",
    "font-medium text-sm"
  )

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };
  
  const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {}
  
  const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {}

  
  return (
    <div className="
      flex flex-col gap-2
      text-primary-600 text-md lg:text-lg font-normal ">
      <div className="
        flex flex-col items-start h-48
        px-4 py-2 rounded-2xl
        bg-white
        selectable-none hover:shadow-md
        focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
      ">
        <textarea 
          name={name}
          value={value}
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
      { <p className={wordCounterClassNames}>{valueLenght}/{minLenght}</p> }
    </div>
  )
}