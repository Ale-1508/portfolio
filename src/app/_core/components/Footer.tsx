"use client";

import classNames from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { copyToClipboard } from "@/logic/_core/common/browserUtils"
import { useEffect, useState } from "react";

const contacts = {
  mail: "alessandro@masiero.biz",
  phone: "+39 3345785733",
  location: "Venice (VE), Italy"
}

const socials = {
  linkedin: "Alessandro Masiero",
  gitHub: "Ale-1508",
  discord: "Ale1508"
}


const sectionClassNames = classNames(
  'flex flex-1 justify-start md:justify-center'
)

const innerSectionClassNames = classNames(
  'flex flex-col font-sans',
  'justify-start gap-4'
)

const sectionHeadingClassNames = classNames(
  'font-semibold',
  'text-lg lg:text-xl ', 
  'text-primary-500',
)

const sectionElementsClassNames = classNames(
  'flex flex-col gap-2',
  'font-normal',
  'text-md lg:text-lg ', 
  'text-primary-700',
)

const liClassNames = classNames(
  "flex gap-2",
  "justify-start items-center",
  "cursor-pointer"
)

const iconsClassNames = "w-8 text-primary-500"

const handleClick = (e: React.MouseEvent) => {
  copyToClipboard(e.currentTarget.textContent ?? "");
}

const MadeBy = () => {
  return (
    <div className={sectionClassNames}>
      <div className={innerSectionClassNames}>
        <h3 className={sectionHeadingClassNames}>Made By</h3>
        <p className={sectionElementsClassNames}>© 2024 Alessandro Masiero</p>
      </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className={sectionClassNames}>
      <div className={innerSectionClassNames}>
        <h3 className={sectionHeadingClassNames}>Social</h3>
        <ul className={sectionElementsClassNames}>
          <a 
            onClick={handleClick}
            href={`https://www.linkedin.com/in/alessandro-masiero`} 
            className={liClassNames}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className={iconsClassNames} />
            {socials.linkedin}
          </a>
          <a 
            onClick={handleClick}
            href={`https://github.com/Ale-1508`} 
            className={liClassNames}
          >
            <FontAwesomeIcon icon={faGithub} className={iconsClassNames} />
            {socials.gitHub}
          </a>
          <li 
            onClick={handleClick}
            className={liClassNames}
          >
            <FontAwesomeIcon icon={faDiscord} className={iconsClassNames} />
            {socials.discord}
          </li>
        </ul>
      </div>
    </div>
  )
}

const ContactInfo = () => {
  return (
    <div className={sectionClassNames}>
      <div className={innerSectionClassNames}>
        <h3 className={sectionHeadingClassNames}>Contact</h3>
        <ul className={sectionElementsClassNames}>
          <a 
            href={`mailto:${contacts.mail}`} 
            className={liClassNames} onClick={handleClick}
          >
            <FontAwesomeIcon icon={faEnvelope} className={iconsClassNames} />
            {contacts.mail}
          </a>
          <a 
            href={`tel:${contacts.phone}`} 
            className={liClassNames} onClick={handleClick}
          >
            <FontAwesomeIcon icon={faPhone} className={iconsClassNames} />
            {contacts.phone}
          </a>
          <a
            href={`https://www.google.com/maps?q=45.493120, 12.109530`} 
            className={liClassNames} onClick={handleClick}
          >
            <FontAwesomeIcon icon={faLocationDot} className={iconsClassNames} />
            {contacts.location}
          </a>
        </ul>
      </div>
    </div>
  )
}

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])
  
  return (
    <div className={`
      flex flex-col gap-16 justify-center p-16
      selection:bg-primary-500 selection:text-primary-50
      text-gray-800
      transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
    `}>
      <div className="grid grid-cols-1 gap-16 md-gap-8 md:grid-cols-3">
        <MadeBy />
        <Social />
        <ContactInfo />
      </div>
      
    </div>
  )
}

export default Footer;