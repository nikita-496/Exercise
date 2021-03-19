//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  const numerical = 5
  const binary = 2 //Основание (система счисления)
  const decimal = 10
 

 const convert = (num,oneRadix,twoRedix) =>{
    let base = 0;
    const a = (String(num).split(''))

      for (let i =0; i < a.length; i++) {
        let degree = a.length-[i+1] //степень
        baseСalculation(a[i])
        
        //Функция выполняющая перевод числа из одной системы счисления (oneRadix) в другую (twoRedix)
        function baseСalculation(number) { 
          base += number * oneRadix ** degree
        }
      }

      return base 
  }
  
  console.log(convert(numerical,decimal,binary))


  //ДОРАБОТАТЬ ПРОГРАММУ В СООТВЕСТВИИ С ТЕСТАМИ
