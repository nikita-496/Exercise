//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export const compute = (oneRna,twoRna) => {
   if (oneRna === "") throw new Error (`Первый параметр не должен быть пустой строкой`)
    if (twoRna === "") throw new Error (`Второй параметр не должен быть пусто строкой`)
    if (oneRna.length !== twoRna.length) throw new Error (`Расстояние Хэмминга определяется только для последовательностей одинаковой длины`)
    let distance = 0;
    for (let i = 0; i < oneRna.length; i++) {
      (oneRna[i] !== twoRna[i]) ? distance ++ : distance;
    }
    return distance
};



