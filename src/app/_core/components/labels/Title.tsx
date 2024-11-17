import classNames from "classnames";

interface TitleProps {
  children: string
  className?: string
}

const Title = ( {children, className}: TitleProps ) => {
  return (
    <div className={classNames(
      className,
      "text-2xl lg:text-3xl", 
      "font-semibold leading-tight",
      "text-primary-600",
    )}>{children}</div>
  )
}

export default Title;