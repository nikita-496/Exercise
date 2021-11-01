const AT_LEAST = new Error('Ability scores must be at least 3')
const AT_MOST = new Error('Ability scores can be at most 18')
const CHARACTERS = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"]

export const abilityModifier = (constitution) => {
  console.log(constitution)
  if (constitution < 3)  throw AT_LEAST
  if (constitution > 18)  throw AT_MOST
  return Math.floor((constitution - 10) / 2)
}

export class Character {
  constructor(){
    for (let character of CHARACTERS) {
      this[character] = Character.rollAbility()
    }
  }

  static rollAbility() {
    let scores = []
    for (let i = 0; i < 4; i++) {
      scores.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1)
    }
     scores.sort().splice(0,1)
     return scores.reduce((prev, cur) => prev + cur, 0)
  }
  get hitpoints() {
    return 10 + abilityModifier(Drizzt.constitution)
  }
}

const Drizzt = new Character()
