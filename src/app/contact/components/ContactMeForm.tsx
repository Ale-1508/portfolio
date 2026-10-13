"use client";

import { cn } from "cn";
import { ChangeEvent, useState } from "react"
import { faEnvelope, faUser, faMobile, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { SmallTextfield } from "@/textfields/SmallTextfield";
import { LargeTextField } from "@/textfields/LargeTextField";
import { SmallLabel } from "@/labels/SmallLabel";
import { PrimaryFormButton } from "@/buttons/PrimaryButton"
import { validateEmail, validateTextField, validateMobileNumber, validateMessage } from "@/formLogic/validationLogic"
import Modal from "@/app/_core/components/alerts/Modal";
import Balancer from "react-wrap-balancer";

import { activePalette } from "@/logic/_core/common/colors";
import { motion } from "motion/react";

type formField = {
  value: string,
  error?: string,
  valid: boolean
}

interface formData {
  fullName: formField,
  email: formField,
  phoneNumber: formField,
  message: formField,
}

type formKeys = "fullName" | "email" | "phoneNumber" | "message";
interface FormFields {
  key: formKeys,
  label: string,
  hint: string,
  icon: IconDefinition,
  handleValidation(value: string): boolean
  inputType: string,
}

const formFields: FormFields[] = [
  {
    key: "fullName",
    label: "Full Name",
    hint: "Your full name",
    icon: faUser,
    inputType: "text",
    handleValidation: validateTextField,
  },
  {
    key: "email",
    label: "Email",
    hint: "Enter your email",
    icon: faEnvelope,
    inputType: "email",
    handleValidation: validateEmail,
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
    hint: "Your phone number",
    icon: faMobile,
    inputType: "tel",
    handleValidation: validateMobileNumber,
  },
]

const initialFormData = {
  fullName: {
    value: "",
    error: "",
    valid: false
  },
  email: {
    value: "",
    error: "",
    valid: false
  },
  phoneNumber: {
    value: "",
    error: "",
    valid: false
  },
  message: {
    value: "",
    error: "",
    valid: false
  },
}

const FormComponent = () => {
  const [formData, setFormData] = useState<formData>(initialFormData)
  const [modal, setModal] = useState({
    isOpen: false,
    isWaiting: false,
    description: ""
  })

  const validateForm = (): boolean => {
    let isValid = true
    if (!formData.fullName.valid) {
      setFormData(prevState => ({ ...prevState, fullName: { ...prevState.fullName, error: "Full Name can't be Empty" }, }));
      isValid = false;
    }

    if (!formData.email.valid) {
      setFormData(prevState => ({ ...prevState, email: { ...prevState.email, error: "Valid Format: yourmail@example.it" }, }));
      isValid = false;
    }

    if (!formData.phoneNumber.valid) {
      setFormData(prevState => ({ ...prevState, phoneNumber: { ...prevState.phoneNumber, error: "Valid Format: +XX XXXXXXXXXX" }, }));
      isValid = false;
    }

    if (!formData.message.valid) {
      setFormData(prevState => ({ ...prevState, message: { ...prevState.message, error: "Your Message should be at least 20 characters long" }, }));
      isValid = false;
    }

    return isValid;
  }

  const formSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (validateForm()) {
      let output: string = "";

      setModal(prevState => ({
        ...prevState,
        description: "I'm Working on it",
        isOpen: true,
        isWaiting: true,
      }));

      try {
        const response = await fetch('/api/v1/users-messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({
            fullName: formData.fullName.value,
            email: formData.email.value,
            phoneNumber: formData.phoneNumber.value,
            message: formData.message.value,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        console.log('Message sent:', data);
        setFormData(initialFormData);
        output = "Thank you! Your message has been successfully sent.";
      } catch (error) {
        output = "Oops! An error occurred. Please try again.";
        console.error('Error:', error);
      }

      setModal(prevState => ({
        ...prevState,
        description: output,
        isOpen: true,
        isWaiting: false,
      }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    let validInput = false;
    switch (name) {
      case "fullName":
        validInput = validateTextField(value);
        break;

      case "email":
        validInput = validateEmail(value);
        break;

      case "phoneNumber":
        validInput = validateMobileNumber(value);
        break;

      case "message":
        validInput = validateMessage(value);
        break;

      default:
        break;
    }
    setFormData(prevState => ({ ...prevState, [name]: { ...[name], value: value, valid: validInput }, }));
  };

  const closeModal = () => setModal(prevState => ({
    ...prevState,
    isOpen: false
  }));

  return (
    <div className={cn(
      "flex justify-center w-full md:max-w-3xl",
    )}>
      <form className={cn(
        "w-full md:max-w-4xl",
        "flex flex-col m-2 gap-8",
        "items-center justify-evenly",
        "px-8 md:px-16 py-8 md:py-16 ",
        "rounded-5xl lg:rounded-10xl",
        "bg-accents-ivory/15 text-white",
        "md:col-span-2",
      )} onSubmit={formSubmit} noValidate={true}>
        {formFields.map((field) => (
          <div className="flex flex-col gap-2 w-full md:w-10/12" key={field.key}>
            <SmallLabel value={field.label} />
            <SmallTextfield
              value={formData[field.key].value}
              isValid={formData[field.key].valid}
              data={field}
              handleChange={handleChange}
              error={formData[field.key].error} />
          </div>
        ))}
        <div className="flex flex-col gap-2 w-full md:w-10/12">
          <SmallLabel value="Your Message" />
          <LargeTextField value={formData.message.value} name="message" hint="Write here your message" handleChange={handleChange} minLenght={20} />
        </div>
        <div className="flex justify-center">
          <PrimaryFormButton text="Submit" />
        </div>
      </form>
      <Modal
        title="OutputMessage"
        isOpen={modal.isOpen}
        isWaiting={modal.isWaiting}
        loadingMessage="Sending your Message..."
        onOk={() => { }}
        onClose={closeModal}>
        <p className={`text-xl`}>
          <Balancer>{modal.description}</Balancer>
        </p>
      </Modal>
    </div >
  )
}

const ContactMeForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-8 justify-center items-center`}>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "text-3xl lg:text-4xl",
          "font-semibold leading-tight",
          activePalette.text.primary["600"]
        )}>Send Me a Message!</motion.h1>
      <FormComponent />
    </motion.div>
  )
}

export default ContactMeForm;