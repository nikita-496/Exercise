
export const isLeap = (year) => {
  let textYaer = String(year);
 
// Checking if a year is a century
   //If it is not a leap year check
  if ( year % Number(textYaer[0]+textYaer[1]) ) {  
      return  (year % 4) ? `${year} - ${false}` : ` ${year} - ${true}`
  //Otherwise, check if the century is a leap year
  }else {
      return  (year % 400) ? `${year} - ${false}`:` ${year} - ${true}`
  } 
}


