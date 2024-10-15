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
    <h1 className="
      w-full text-lg text-center
      leading-tight
      font-semibold font-sans
      flex flex-row justify-center
      text-gray-700
      selection:bg-primary-500 selection:text-primary-50"
    >
      I love transforming ideas into seamless user experiences, let's build something amazing together!<br/>You can find me crafting a Desktop, Mobile or Web app.
    </h1>
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