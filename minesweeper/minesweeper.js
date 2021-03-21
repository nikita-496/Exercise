const  annotate = (source) => {
    let result = []
    let sourceMatrix = source.map(element => element.split(""))

    for (let i = 0; i < source.length; i++) {
      let explorered = [];
   
      for (let j = 0; j < source[i].length; j++) {
        sourceMatrix[i][j] === " " ? explorered.push(toExploreСells(i, j, sourceMatrix)) : explorered.push(sourceMatrix[i][j])
        }
        result.push(explorered.join(""))
    }
    return result
}


function toExploreСells (i, j, field) {  
    let neighborhood = []; 
    let neighbors = {};
   //Верхняя строка 
    if (i === 0) {
        //Начальные клетки 
        if (j === 0)  {
            neighborhood = [neighbors.right = field[i][j + 1], neighbors.bottomRight =  field[i + 1][j + 1], neighbors.bottom = field[i + 1][j]] 
        }
        //Крайние клетки 
        else if  (j === field-1) {
            neighborhood = [neighbors.bottom = field[i + 1][j], neighbors.bottomLeft = field[i + 1][j - 1], neighbors.left = field[i][j - 1]] 
        }
        //Остальные клетки 
        else {
            neighborhood = [neighbors.right = field[i][j + 1], neighbors.bottomRight = field[i + 1][j + 1], neighbors.bottom = field[i + 1][j], neighbors.bottomLeft = field[i + 1][j - 1], neighbors.left = field[i][j - 1]] 
        }
    }
    //Нижняя строка 
    else if  (i === field.length - 1) {
        //Начальные клетки
        if (j === 0) {
            neighborhood = [neighbors.top = field[i - 1][j], neighbors.topRight = field[i - 1][j + 1], neighbors.right = field[i][j + 1]] 
        }
        //Крайние клетки 
        else if (j === field.length - 1) {
            neighborhood =  [neighbors.top = field[i - 1][j], neighbors.left = field[i][j - 1], neighbors.topLeft = field[i - 1][j - 1]]
        }
        //Остальные 
        else {
            neighborhood = [neighbors.top = field[i - 1][j], neighbors.topRight = field[i - 1][j + 1], neighbors.right = field[i][j + 1], neighbors.left = field[i][j - 1], neighbors.topLeft = field[i - 1][j - 1]]
        }
    }
    //Промежуточные строки
   else{
        neighborhood =[neighbors.top = field[i - 1][j], neighbors.topRight = field[i - 1][j + 1], neighbors.right = field[i][j + 1], neighbors.bottomRight = field[i + 1][j + 1], neighbors.bottom  = field[i + 1][j], neighbors.bottomLeft = field[i + 1][j - 1], neighbors.left = field[i][j - 1], neighbors.topLeft = field[i - 1][j - 1]]
   }
   let mines = neighborhood.filter(item => item === "*").length
   return mines !== 0 ? mines.toString() : " "
}

/*
const sourceField =['***', '* *', '***']
console.log(annotate (sourceField))
*/