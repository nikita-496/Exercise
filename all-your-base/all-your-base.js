//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  const numerical = [1, 1, 2, 0]
  const requiredRadix = 16 //Основание (система счисления)
  const givenRedix = 3
 
   
 const convert = (num,oneRadix,twoRedix) => {
      let base = []
      //Елси переводим в двоичную систему
      if(requiredRadix === 2) {
        while (num > twoRedix) {
          let a = num;
          base.push(Math.floor(a % twoRedix))
          //ограничитель
          num = num / twoRedix
        }
        return base.concat(Math.floor(num)).reverse()
      }     

      //Елси переводим в десятичную систему
      if(requiredRadix === 10) {
          let rang = num.slice("").reverse();
          for (let i = num.length-1; i >= 0; i--) {
          base.push(rang[i] * oneRadix ** i)
          };
          return base.reduce((accumulator, element) => {
            return accumulator + element
          })
      }
      
  }
  
  console.log(convert(numerical,givenRedix,requiredRadix))


  //ДОРАБОТАТЬ ПРОГРАММУ В СООТВЕСТВИИ С ТЕСТАМИ
