export function isLeap(year: number): boolean {
  let isLeap: boolean

  if ( checkIsMultiple(year, 4) === 0 && checkIsMultiple(year, 100) !== 0 || checkIsMultiple(year, 400) === 0) {
    return isLeap = true
  }else {
    return isLeap = false
  }
}
function checkIsMultiple (year: number, num: number): number {
    return year % num
}
