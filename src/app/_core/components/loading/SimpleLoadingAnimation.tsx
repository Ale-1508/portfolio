const animationClassName = `
  w-3 h-3 rounded-full 
  bg-primary-500
` 

export const SimpleLoadingAnimation = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className=
        {`${animationClassName}
        animate-bounce [animation-delay:.7s]`}>
      </div>
      <div className=
        {`${animationClassName}
        animate-bounce [animation-delay:.3s]`}>
      </div>
      <div className=
        {`${animationClassName}
        animate-bounce [animation-delay:.7s]`}>
      </div>
  </div>
  )
}