//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  const numerical = [1] //number
  const givenRedix = -2 // given radix (number system)
  const requiredRadix = -7 // what do you want to translate into
 
  const errorProcessing = (num, givenRedix, requiredRadix) => {
    try{
      if (givenRedix === 1 || givenRedix === 0 || givenRedix < 0) {
        throw new Error("Wrong input base")
      }
      if (requiredRadix === 1 || requiredRadix === 0 || requiredRadix < 0) {
        throw new Error("Wrong output base")
      }
      //num - not a number or an empty array
      if (num.length === findNumber(num).length || num.length === 0 ) {
        throw new Error("Input has wrong format")
      }
      if ((givenRedix === 10 || givenRedix === 7)  && (num.length > 1 && num[0] === 0)) {
        throw new Error("Input has wrong format")
      }
      if(givenRedix === 2 && findNotValidNumber(num).length > 0) {
        throw new Error("Input has wrong format")
      }
    }catch(e) {
      return e
    }
  }
  const findNotValidNumber = (num) => num.filter(n => n < 0 || n > 1)

  //checking each element of the array to see if it is a number
  const findNumber = (num) =>  num.filter(n => isNaN(n))

  const checkSource = (num, givenRedix, requiredRadix) =>  num[0] === 0 && num.length === 1 ? 0 : errorProcessing(num, givenRedix, requiredRadix)
  

  const convert = (num,givenRedix,requiredRadix) => {
    //check for the validity of the source data
    if (checkSource(num,givenRedix,requiredRadix) === 0) {
      return 0
    }
    else {
      console.log(checkSource(num,givenRedix,requiredRadix))
    }
    if (requiredRadix === 10) {
      let digits = convertToDecimal().toString().split("")
      return digits.map(Number)
    }
    else {
      return convertFromDecimal() 
    }
    
    function convertToDecimal () {
      return num.reduce((acc, curentValue, index) => acc + curentValue * givenRedix ** (num.length - (index+1)), 0)
    }

    function convertFromDecimal () {
      //convert the number to decimal base for ease of calculation
      if (givenRedix !== 10) {
        let digits = convertToDecimal().toString().split("")
        num = digits.map(Number)
      }
      const hash = []
      num = num.join("")
      let i= 0
      do{
         hash[i] = num % requiredRadix
         num = Math.floor(num / requiredRadix)
         i++
      } while (num > requiredRadix || num === requiredRadix)
         hash.reverse().unshift(num)
        return hash
    }
 }
  
  console.log(convert(numerical,givenRedix,requiredRadix))



