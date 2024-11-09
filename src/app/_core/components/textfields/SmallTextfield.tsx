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
}

interface SmallTextfieldProps {
  value?: string, 
  data?: textfieldData
  required ?: boolean
  icon?: IconDefinition | undefined
  handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export const SmallTextfield = ( { 
  value="", 
  data={
    key: "",
    hint: "", 
    icon: undefined, 
    inputType: "text", 
  }, 
  required=false, 
  handleChange,
}: SmallTextfieldProps ) => {
  const [ state, setState ] = useState({
    trailingIcon: {
      name: faCircleInfo,
      show: false
    }
  });

  const capitalizeFirstLetter = (string: string) => { return string.charAt(0).toUpperCase() + string.slice(1); };

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
      selectable-none hover:shadow-md
      focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
    ">
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
      <FontAwesomeIcon icon={state.trailingIcon.name} className={state.trailingIcon.show ? "inline" : "hidden"}/>
    </div>
  )
}