"use client"

import { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCircleInfo, faCheck } from '@fortawesome/free-solid-svg-icons';

interface textfieldData{
  key: string,
  label?: string,
  hint: string,
  icon: IconDefinition | undefined,
  inputType: string,
  handleValidation(value: string): boolean
}

interface SmallTextfieldProps {
  value?: string, 
  data?: textfieldData
  required ?: boolean
  icon?: IconDefinition | undefined
  error?: string
  handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export const SmallTextfield = ( { 
  value="", 
  data={
    key: "",
    hint: "", 
    icon: undefined, 
    inputType: "text", 
    handleValidation: () => true
  }, 
  required=false,
  error, 
  handleChange,
}: SmallTextfieldProps ) => {
  const [ state, setState ] = useState({
    trailingIcon: {
      name: faCheck,
      show: false
    }
  });

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState, 
      trailingIcon: { ...prevState.trailingIcon, show: false }
    }));
  }

  
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(data.handleValidation(value))
    setState(prevState => ({
      ...prevState, 
      trailingIcon: { ...prevState.trailingIcon, show: data.handleValidation(value) }
    }));
  }

  
  return (
    <div className="flex flex-col">
      <div className={`
        flex flex-row items-center
        pl-4 pr-2 rounded-2xl
        text-md lg:text-lg font-normal 
        text-primary-600
        bg-white
        selectable-none hover:shadow-md
        focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
        ${error && "outline-supportingColors-error outline-2 outline"}
      `}>
        { data.icon!==undefined && <FontAwesomeIcon icon={data.icon} /> }
        <input 
          name={data.key}
          type={data.inputType}
          value={value}
          placeholder={data.hint}
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
        { error
          ? <FontAwesomeIcon icon={faCircleInfo} className={error ? "inline" : "hidden"}/>
          : <FontAwesomeIcon icon={faCheck} className={state.trailingIcon.show ? "inline" : "hidden"}/>
        }
      </div>
      {error && <span className="
        flex w-full justify-end
        -ml-2 mt-1 
        text-supportingColors-error text-sm 
      ">{error}</span>}
    </div>
  )
}