import Image from 'next/image'
import Balancer from "react-wrap-balancer";
// transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`

const Title = () => {
  return (
    <h1 className="
        flex flex-row w-full
        text-6xl md:text-7xl lg:text-8xl  
        font-semibold leading-tight
        text-center justify-center
        text-primary-600
    ">
      I'm Alessandro
    </h1>
  )
}

const Description = () => {
  return (
    <div className='
      flex flex-col gap-8 
      w-full lg:w-128 
      justify-center items-center
    '>
      <h2 className='
        text-2xl md:text-3xl lg:text-4xl 
        font-semibold leading-tight
        text-primary-600
      '>
        <Balancer className="w-full flex">
          An Italian Full-Stack Developer based in Venice.
        </Balancer>
      </h2>
      <p className='
        text-md md:text-lg lg:text-xl 
        font-normal leading-tight
        text-primary-600
      '>
        <Balancer className="w-full flex">
          Hi there! I'm a passionate <span className='font-semibold'>Full-Stack</span> Developer with over <span className='font-semibold'>4</span> years of experience crafting elegant software solutions. <br /><br />
          My expertise spans <span className='font-semibold'>Web</span>, <span className='font-semibold'>Desktop</span> and <span className='font-semibold'>Mobile</span> app development, where I bring innovative ideas to life. Let's connect and build something extraordinary together!
        </Balancer>
      </p>
    </div>
  )
}

const PicureOfMe = () => {
  return (
    <Image
      className="rounded-t-10xl rounded-b-2xl"
      src={`/images/me-full.jpg`}
      width={224}
      height={224}
      alt="A picture of Me"
    />
  )
}

const AboutMe = () => {
  return (
    <div className="
      flex flex-col gap-16 font-sans
    selection:bg-primary-500 selection:text-primary-50
    ">
      <Title />
      <div className="
        flex flex-col ml:flex-row 
        gap-8 ml:gap-24
        justify-center items-center 
      ">
        <PicureOfMe />
        <Description />
      </div>
    </div>
  )
}

export default AboutMe