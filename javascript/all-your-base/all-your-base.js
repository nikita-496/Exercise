const errorProcessing = (num, givenRedix, requiredRadix) => {
  const WRONG_FORMAT = new Error("Input has wrong format")
  const WRONG_iNPUT = new Error("Wrong input base")
  const WRONG_OUTPUT = new Error("Wrong output base")

  if (givenRedix === 1 || givenRedix === 0 || givenRedix < 0) throw WRONG_iNPUT
  if (requiredRadix === 1 || requiredRadix === 0 || requiredRadix < 0) throw WRONG_OUTPUT
  if (num.length ===  num.filter(n => isNaN(n)).length || num.length === 0 ) throw WRONG_FORMAT
  if ((givenRedix === 10 || givenRedix === 7)  && (num.length > 1 && num[0] === 0)) throw WRONG_FORMAT
  if(givenRedix === 2 && num.filter(n => n < 0 || n > 1).length > 0) throw WRONG_FORMAT
}

 export const convert = (num,givenRedix,requiredRadix) => {
  if (num[0] == 0 && num.length === 1) return [0]
  errorProcessing(num, givenRedix, requiredRadix)
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





