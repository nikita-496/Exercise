const  annotate = (source) => {
    //2

    for (let i = 0; i < source.length; i++) {
      let exploreredRow = [];
      //3
      for (let j = 0; j < source[i].length; j++) {
        source[i][j] === " " ? exploreredRow.push(toExploreСells(i, j, source)) : exploreredRow.push(field[i][j])
        }
        return exploreredRow
    }
}
//8



function toExploreСells (i, j, field) {  
    let neighborhood = []; 
    let neighbors = {
        top : field[i - 1][j], topRight :  field[i - 1][j + 1],  right : field[i][j + 1], bottomRight : field[i + 1][j + 1], bottom :  field[i + 1][j], bottomLeft: field[i + 1][j - 1], left : field[i][j - 1],
        topLeft : field[i - 1][j - 1]
       };
   //Верхняя строка 
    if (i === 0) {
        //Начальные клетки
        (j === 0) ?  neighborhood = [neighbors.right, neighbors.bottomRight, neighbors.bottom] 
        //Крайние клетки 
        : (j === fieldwidth-1) ? neighborhood = [neighbors.bottom, neighbors.bottomLeft, neighbors.left]
        : neighborhood = [neighbors.right, neighbors.bottomRight, neighbors.bottom, neighbors.bottomLeft,  neighbors.left]
    }
    //Нижняя строка 
    else if  (i === field.length - 1) {
        //Начальные клетки
        (j === 0) ? neighborhood = [neighbors.top, neighbors.topRight, neighbors.right] 
        //Крайние клетки 
        : (j === fieldwidth-1) ? [neighbors.top,neighbors.left, neighbors.topLeft]
        : neighborhood = [neighbors.top, neighbors.topRight, neighbors.right, neighbors.left, neighbors.topLeft]
    }
   else{
        neighborhood =[neighbors.top, neighbors.topRight, neighbors.right, neighbors.bottomRightDiagonal, neighbors.bottom, neighbors.bottomLeftDiagonal, neighbors.left, neighbors.topLeft]
   }
   let mines = neighborhood.filter(item => item === "*").length
   return mines !== 0 ? mines.toStirng() : " "
}


const sourceField = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']
console.log(annotate (sourceField))