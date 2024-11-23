interface PrimaryButtonProps {
  text: string,
  onClick?: () => void
}

export const PrimaryFormButton = ( { text } :PrimaryButtonProps) => {
  return (
    <input 
      className="
        flex flex-row w-32
        items-center justify-center
        py-2 px-8 rounded-3xl
        text-white text-md font-normal font-sans select-none
        bg-primary-500 cursor-pointer
        hover:bg-primary-600 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
        duration-500 ease-out
      "
      value={ text }
      type="submit"
    /> 
  )
}

export const PrimaryButton = ( { text } :PrimaryButtonProps) => {
  return (
    <input 
      className="
        flex flex-row w-32
        items-center justify-center
        py-2 px-8 rounded-3xl
        text-white text-md font-normal font-sans select-none
        bg-primary-500 cursor-pointer
        hover:bg-primary-600 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
        duration-500 ease-out
      "
      value={ text }
      type="submit"
    /> 
  )
}