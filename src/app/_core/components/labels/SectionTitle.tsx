import classNames from "classnames";

interface SectionTitleProps {
  children: string
  className?: string
}

const SectionTitle = ( {children, className}: SectionTitleProps ) => {
  return (
    <div className={classNames(
      "text-lg lg:text-xl ", 
      "font-medium leading-tight",
      "text-primary-600",
      className
    )}>{children}</div>
  )
}

export default SectionTitle;