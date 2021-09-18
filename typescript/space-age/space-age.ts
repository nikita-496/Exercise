
type Planets = {
  [key: string]: number
}

const dictonary: Planets = {
  mercury: 0.2408467,
  venus: 0.61519726 ,
  earth: 31557600,
  mars: 1.8808158, 
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132 
}

const EARTH_YEARS:number = dictonary["earth"]

export function age(planet: string, seconds: number): number {

 let secondsAYear: number = definitionOfSecondsPerYear(planet)
 return (Math.round(seconds / secondsAYear * 100)) / 100 
}

function definitionOfSecondsPerYear (planet: string): number {
  return planet === "earth" ? dictonary[planet] : dictonary[planet] * EARTH_YEARS
}


