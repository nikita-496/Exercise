
 export const meetup = (...input) => {
   let targetDay 
   input[2] === "teenth" ? targetDay = determining(input, 13) : targetDay = determining(input, 1)   
   return new Date(input[0], input[1] - 1, targetDay)
};

const determining = (data, numOfday) => {
  const DAYS_OF_WEEK = {
    Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, 
    Thursday: 4, Friday: 5,  Saturday: 6
  }
  const DAYS_OF_WEEK_TEENTH = {}

  let fisrtDay = (new Intl.DateTimeFormat('en-US', { weekday: 'long'})
  .format(new Date(data[0], data[1] - 1, numOfday)))

  let createArr = 0
  let sourceArr = DAYS_OF_WEEK[fisrtDay]

  while (createArr < 7) {
    let arr = Object.keys(DAYS_OF_WEEK)
    if(createArr === 0) {
      DAYS_OF_WEEK_TEENTH[fisrtDay] = createArr
      createArr++
      sourceArr++
      continue
    }
    if (sourceArr > 6) {
      sourceArr = 0
      continue 
    }
    DAYS_OF_WEEK_TEENTH[arr[sourceArr]] = createArr
    createArr++
    sourceArr++
  }
  
  if (numOfday === 1) {
    let firstNumOfTargetDay = DAYS_OF_WEEK_TEENTH[data[3]] + numOfday
    let throwWeek = 0
    switch (data[2]) {
      case "first":
        throwWeek
        break
      case "second":
        throwWeek = 7
        break
      case "third":
        throwWeek = 14
         break
      case "fourth":
        throwWeek = 21
        break
      case "last":
        throwWeek = 28
        break
      default:
        break
    }
    let numOfTargetDay = firstNumOfTargetDay + throwWeek
    let lastDayOfMonth = getLastDayofMonth(data[0], data[1]) 
    let skeepLastWeek = firstNumOfTargetDay + 21
    return numOfTargetDay > lastDayOfMonth ? skeepLastWeek : numOfTargetDay

  }else {
    return numOfday + DAYS_OF_WEEK_TEENTH[data[3]]
  }
}

const getLastDayofMonth = (year, month) => {
  let date = new Date(year, (month - 1) + 1, 0)
  return date.getDate()
}

