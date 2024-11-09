export function validateEmail(email: string): boolean { 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email); 
}

export function validateTextField( value: string ):boolean {
  if(value.length === 0) return false;
  return true;
}

export function validateMobileNumber( mobileNumber: string ):boolean {
  const mobileNumberRegex = [
    /^\+[1-9]{2} [0-9]{3,14}$/,
    /^\+[1-9]{2}[0-9]{3,14}$/,
    /^[1-9]{2}[0-9]{3,14}$/
  ]

  let isValid = false;
  for (let index = 0; index < mobileNumberRegex.length; index++) {
    if (mobileNumberRegex[index].test(mobileNumber)) isValid=true;
  }

  return isValid;
}