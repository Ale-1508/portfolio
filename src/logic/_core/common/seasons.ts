export type Season = "winter" | "spring" | "summer" | "fall" | undefined;

export const getSeason = (): Season | undefined => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  
  if ((month === 11 && day >= 21) || (month >= 0 && month <= 1) || (month === 2 && day < 20)) 
  { 
    return "winter"; 
  } else if ((month === 2 && day >= 20) || (month >= 3 && month <= 4) || (month === 5 && day < 21)) 
  { 
    return "spring"; 
  } else if ((month === 5 && day >= 21) || (month >= 6 && month <= 7) || (month === 8 && day < 23))
  { 
    return "summer"; 
  } else if ((month === 8 && day >= 23) || (month >= 9 && month <= 10) || (month === 11 && day < 21)) 
  { 
    return "fall";
  } else { 
    return undefined
  }
}