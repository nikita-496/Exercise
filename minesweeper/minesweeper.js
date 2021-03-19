const  annotate = (source) => {
  let cell = source.join ('');
  let i = 0;
  let finall = []; 
  let space = 0;
  let mine = 0;
      //3
     while (i < cell.length-1) {
      (cell[i] === (' ')) ? space ++ : mine ++;
      i++
      }
      if(space === cell.length-1 || mine === cell.length-1)  {return (finall = source) }
      else { i = 0 };


  //Обработка поля по горизонтали и вертикали
  //let field = [];
    function translatingField(trans) {
      let field = trans.map(element => {
        let row = '';
        let last = element[element.length-1];
          for (i = 0; i < element.length; i++) {
            let prev = element[i-1];
            let next = element[i+1];
            //Выбор дальнейшего развития события в зависимости от того
            //имеются ли мины по краям строки или нет 
              function choise ([first,last,current]) {
                  if (first === ' ' && last === ' ') {
                      return noMines (current)
                  }
                  else {return isMines(current)}
              }
              function basic (item1) {
                return (item1 === ' ' && (prev === '*' && next === '*')) ? row += 2 
                :(item1 === ' ' && ((prev === ' ' && next === '*')||(prev === '*' && next === ' '))) ? row += 1 
                :(item1 === ' ' && (next === '*' || prev === '*' )) ? row += 1 
                : row += item1 
              }
              function isMines (item2) {
                 return ((i === 0 || i === element.length-1) && item2 === '*') ? row += item2
                :basic (item2)  
              }
              function noMines (item3) {
                return (i === 0 && next === '*') ? row += 1 
                :(i === element.length-1 && prev === '*') ? row += 1
                :basic (item3)  
              }
              choise([element[0],last,element[i]])
            }
            return row
      })
      return field
  }

  //горизонталь
  let translate = source; //Массива горизонталей 
    translatingField(translate)
  
  /******************************************/

  //вертикаль 
  translate = translateToColumns(sourceField)
  translatingField(translate)
  //Создание массива вертикалей
  function translateToColumns (cells) {
      let collums = [];
      let lastIndex = cells[0].length //для перехода к слудующему элементы вертикали
      for (let c = 0; c < lastIndex; c++){ // с - текущая вертикаль 
         //Создание текущей вертикали
        function createVertical (vertical) {
          let collumStr = vertical;
          for (let i = 1; i < lastIndex; i++) {
             collumStr += cells[i][c]
          }
            return collumStr
        }
        collums.push(createVertical(cells[0][c]))
      } 
      return collums
  }
    translatingField(translate)
/*******************************************/
  
}
const sourceField = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']
annotate (sourceField) 