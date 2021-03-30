//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 class Triangle {
  constructor(...sides) {
    this.a = arguments [0];
    this.b = arguments [1];
    this.c = arguments [2];
  }

  get isEquilateral() {
      return (this.leftSide === this.rightSide && this.leftSide === this.base && this.rightSide === this.base) ? true : false 
  }

  get isIsosceles() {
    return (this.a === this.b || this.a === this.c || this.b === this.c) ? true : false 
  }

  get isScalene() {
    return (this.a !== this.b && this.a !== this.c && this.b !== this.c) ? true : false 
  }
}

const triangle = new Triangle (2, 3, 4);
/*
console.log(triangle.isEquilateral)
console.log(triangle.isIsosceles)
console.log(triangle.isScalene)
*/

