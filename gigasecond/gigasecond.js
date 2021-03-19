//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const gs = 1e9;
/*export*/ const gigasecond = (date) => {
  let now = new Date (date.getTime());
  now.setSeconds(now.getSeconds() + gs);
  return now
};
let date = new Date (1977, 5, 13);
console.log(gigasecond (date));





