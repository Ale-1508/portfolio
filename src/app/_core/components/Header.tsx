interface HeaderProps { 
  title:string
  isVisible: boolean
}

export const Header = ( { title, isVisible } : HeaderProps ) => {
  return (
    <h1 className={`
      text-3xl sm:text-4xl lg:text-5xl 
      font-semibold leading-tight
      text-primary-600
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>{title}</h1>
  )
}
