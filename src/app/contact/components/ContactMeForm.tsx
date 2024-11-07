"use client";

import classNames from "classnames";
import Balancer from "react-wrap-balancer";
import { useEffect, useState } from "react"
import { faEnvelope, faUser, faMobile } from '@fortawesome/free-solid-svg-icons';

import { SmallTextfield } from "@/textfields/SmallTextfield";
import { LargeTextField } from "@/textfields/LargeTextField";
import { SmallLabel } from "@/labels/SmallLabel";
import PrimaryButton from "@/buttons/PrimaryButton"


/*
full name
email
phone
message
button to send message

I'm looking for:
- WebApp
- Landing Page
- Desktop App
- Mobile App

contact me:
email
mobile
my city
*/

const formFields = [
  {
    key: "full-name",
    value:"Full Name",
    hint:"Your full name",
    icon:faUser,
    inputType:"text",
  },
  {
    key: "email",
    value:"Email",
    hint:"Enter your email",
    icon:faEnvelope,
    inputType:"email",
  },
  {
    key: "phone-number",
    value:"Phone Number",
    hint:"Your phone number",
    icon:faMobile,
    inputType:"tel",
  },
]


const FormComponent = ( ) => {
  const cardClassNames = classNames(
    "grid",
    "w-full max-w-4xl",
    "items-start justify-start",
    "m-2 py-8 px-8 md:16 gap-8",
    "rounded-4xl justify-evenly items-center", 
    "bg-accents-ivory bg-opacity-25 text-white",
    "md:col-span-2",
  );
  const fieldClassNames = "flex flex-col gap-2"

  return (
    <form className={cardClassNames}>
      { formFields.map((field) => (
        <div className={fieldClassNames} key={field.key}>
          <SmallLabel value={field.value}/>
          <SmallTextfield hint={field.hint} inputType={field.inputType} icon={field.icon}/>
        </div>
      ))}
      <div className={fieldClassNames}>
        <SmallLabel value="Your Message"/>
        <LargeTextField hint="Write here your message"/>
      </div>
      <div className="flex justify-center">
        <PrimaryButton text="Submit" onSubmit={()=>console.log("ye")}/>
      </div>
    </form>
  )
}

const ContactMeForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <div className={`
      flex flex-col gap-8 justify-center items-center
      transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}>
      <h1 className={`
        text-2xl lg:text-3xl 
        font-semibold leading-tight
        text-primary-600
        transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}>Send Me a Message!</h1>
      <FormComponent />
    </div>
  )
}

export default ContactMeForm;