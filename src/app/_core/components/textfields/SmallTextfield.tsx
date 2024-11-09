import { ChangeEvent } from "react";
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
  isValid: boolean
  data?: textfieldData
  required ?: boolean
  icon?: IconDefinition | undefined
  error?: string
  handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export const SmallTextfield = ( { 
  isValid,
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
          required={required}
          className="
            px-4 py-2 w-full
            bg-transparent
            text-md lg:text-lg font-normal 
            text-primary-600
            placeholder-primary-400 placeholder-font-normal
            focus:outline-none
            "
        />
        { isValid && <FontAwesomeIcon icon={faCheck}/>}
        { error && <FontAwesomeIcon icon={faCircleInfo}/>}
      </div>
      {error && <span className="
        flex w-full justify-end
        -ml-2 mt-1 
        text-supportingColors-error text-sm 
      ">{error}</span>}
    </div>
  )
}