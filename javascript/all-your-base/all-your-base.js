//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const errorProcessing = (num, givenRedix, requiredRadix) => {
  const WRONG_FORMAT = new Error("Input has wrong format")
  const WRONG_iNPUT = new Error("Wrong input base")
  const WRONG_OUTPUT = new Error("Wrong output base")

  if (givenRedix === 1 || givenRedix === 0 || givenRedix < 0) throw WRONG_iNPUT
  if (requiredRadix === 1 || requiredRadix === 0 || requiredRadix < 0) throw WRONG_OUTPUT
  //num - not a number or an empty array
  if (num.length === findNumber(num).length || num.length === 0 ) throw WRONG_FORMAT

  if ((givenRedix === 10 || givenRedix === 7)  && (num.length > 1 && num[0] === 0)) throw WRONG_FORMAT
  if(givenRedix === 2 && findNotValidNumber(num).length > 0) throw WRONG_FORMAT
}
const findNotValidNumber = (num) => num.filter(n => n < 0 || n > 1)

//checking each element of the array to see if it is a number
const findNumber = (num) =>  num.filter(n => isNaN(n))

const checkSource = (num, givenRedix, requiredRadix) => num[0] === 0 && num.length === 1 ? 0 : errorProcessing(num, givenRedix, requiredRadix)

export const convert = (num,givenRedix,requiredRadix) => {
  //check for the validity of the source data
  if (checkSource(num,givenRedix,requiredRadix) === 0) {
    return [0]
  }
  else {
    (checkSource(num,givenRedix,requiredRadix))
  }
  if (requiredRadix === 10) {
    let digits = convertToDecimal().toString().split("")
    return digits.map(Number)
  }
  else {
    return convertFromDecimal() 
  }

  function convertToDecimal () {
    return num.reduce((acc, curentValue, index) => acc + curentValue * givenRedix ** (num.length - (index + 1)), 0)
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
      num = Math.trunc(num / requiredRadix)
      i++
    } while (num >= requiredRadix)
      hash.reverse().unshift(num)
      return hash
  }
}
  




