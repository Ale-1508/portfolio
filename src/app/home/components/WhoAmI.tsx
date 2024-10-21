const TitleSection = () => {
  return(
    <h1 className="
      w-full text-7xl text-center
      leading-tight
      font-semibold font-sans
      flex flex-row justify-center
      text-primary-600
      selection:bg-primary-500 selection:text-primary-50"
    >
      Hi. I'm Alessandro.<br />A Full-Stack Developer.
    </h1>
  )
}

const DescriptionSection = () => {
  return(
    <div className="
      text-center justify-center items-center
      flex flex-col gap-2 group
      font-semibold font-sans
      text-gray-700
      selection:bg-primary-500 selection:text-primary-50"
    >
      <h1 className="leading-tight text-lg
        flex flex-row justify-center">
        I love transforming ideas into seamless user experiences.<br/> let's build something amazing together!
      </h1>
      <p className="text-md w-fit
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out"
      >
        You can find me crafting a Desktop, Mobile or Web app.
      </p>
    </div>
  )
}

export default function WhoAmI() {
  return(
    <div className="flex flex-col gap-16">
      <TitleSection />
      <DescriptionSection />
    </div>
  );
}