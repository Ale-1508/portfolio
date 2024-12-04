"use client"

import { activePalette } from "@/logic/_core/common/colors";
import classNames from "classnames";
import { ChangeEvent } from "react";

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
  
  return (
    <div className={`
        flex flex-col gap-2
        ${activePalette.text.primary["600"]}
        text-md lg:text-lg font-normal `
      }>
      <div className={`
        flex flex-col items-start h-48
        px-4 py-2 rounded-2xl
        bg-white
        selectable-none hover:shadow-md
        ${activePalette.bg.outline} 
        focus-within:outline-2 focus-within:outline
      `}>
        <textarea 
          name={name}
          value={value}
          placeholder={hint}
          onChange={handleChange}
          required={required}
          className={`
            py-2 w-full h-full
            bg-transparent
            text-md lg:text-lg font-normal 
            ${activePalette.text.primary["600"]}
            placeholder-primary-400 placeholder-font-normal
            focus:outline-none
            overflow-hidden resize-none
          `}
        />
      </div>
      { <p className={wordCounterClassNames}>{valueLenght}/{minLenght}</p> }
    </div>
  )
}