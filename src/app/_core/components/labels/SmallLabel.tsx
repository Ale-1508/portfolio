interface LabelProps {
  value: string
}

export const SmallLabel = ( { value }:LabelProps ) => {
  return (
    <div className="      
      text-md lg:text-lg font-medium 
      text-primary-600
    ">{value}</div>
  )
}