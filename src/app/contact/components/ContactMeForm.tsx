"use client";

import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react"
import { faEnvelope, faUser, faMobile, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

interface formData {
  fullName: string,
  email: string,
  phoneNumber: string,
  message: string,
}

type formKeys = "fullName" | "email" | "phoneNumber" | "message";
interface FormFields {
  key: formKeys,
  label: string,
  hint: string,
  icon: IconDefinition,
  inputType: string,
}

const formFields: FormFields[] = [
  {
    key: "fullName",
    label:"Full Name",
    hint:"Your full name",
    icon:faUser,
    inputType:"text",
  },
  {
    key: "email",
    label:"Email",
    hint:"Enter your email",
    icon:faEnvelope,
    inputType:"email",
  },
  {
    key: "phoneNumber",
    label:"Phone Number",
    hint:"Your phone number",
    icon:faMobile,
    inputType:"tel",
  },
]

const initialFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
}

const FormComponent = ( ) => {
  const [ formData, setFormData ] = useState<formData>(initialFormData)

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

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    console.log(formData.fullName);
    console.log(formData.email);
    console.log(formData.phoneNumber);
    console.log(formData.message);
    setFormData({ fullName: "", email: "", phoneNumber: "", message: "", }); 
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target; 
    setFormData(prevState => ({ ...prevState, [name]: value, })); 
  };

  return (
    <form className={cardClassNames} onSubmit={formSubmit}>
      { formFields.map((field) => (
        <div className={fieldClassNames} key={field.key}>
          <SmallLabel value={field.label}/>
          <SmallTextfield value={formData[field.key]} data={field} handleChange={handleChange}/>
        </div>
      ))}
      <div className={fieldClassNames}>
        <SmallLabel value="Your Message"/>
        <LargeTextField value={formData.message} name="message" hint="Write here your message" handleChange={handleChange} minLenght={20} />
      </div>
      <div className="flex justify-center">
        <PrimaryButton text="Submit"/>
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