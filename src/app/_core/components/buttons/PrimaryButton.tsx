interface PrimaryButtonProps {
  text: string,
  onSubmit(): void,
}

const PrimaryButton = ( { text, onSubmit } :PrimaryButtonProps) => {
  return (
    <div 
      className="
        flex flex-row w-32
        items-center justify-center
        py-2 px-8 rounded-3xl
        text-white text-md font-normal font-sans select-none
        bg-primary-500 cursor-pointer
        hover:bg-primary-700
        focus-within:outline-primary-300 focus-within:outline-2 focus-within:outline
        duration-500 ease-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      "
      onSubmit={onSubmit}
    > 
      { text }     
    </div>
  )
}

export default PrimaryButton