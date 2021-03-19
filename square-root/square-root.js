//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (sqr) => {
  let rank = (String(sqr).length);
  let value
  rank > 1 ? value = rank * 10 * (rank/2) : value = rank
    let i = 0; 
  while (i < 6) {
      value = .5 * (value + sqr/value);
      i++
  }
  return value.toFixed(3)
};
