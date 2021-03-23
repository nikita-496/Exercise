//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const translate = (rna) => {
  let codon = [];
  let protein = []
  //Разбиение на кодон
    for (let i =0; i < rna.length/3; i++) {
     codon [i] =  i === 0 ? rna.slice(i,3) : rna.slice(i*3,(i*3)+3)
    }
  // Создание протенина 
    for (let i in codon) {
       if ( codon [i] === 'UAA'||codon [i] ==='UAG'||codon [i] ==='UGA') {
     break;
   }
    switch (codon[i]) {
      case 'AUG':
        protein.push ('Methionine');
        break;
      case 'UUU' || 'UUC':
        protein.push ('Phenylalanine');
        break;
      case 'UUA' || 'UUG':
        protein.push ('Leucine');
        break;
      case 'UCU' || 'UCC' || 'UCA'||'UCG':
        protein.push ('Serine');
        break;
      case 'UAU' || 'UAC':
        protein.push ('Tyrosine');
        break;
       case 'UGU' || 'UGC':
        protein.push ('Cysteine');
        break;
      case 'UGG':
        protein.push ('Tryptophan');
        break;
      default:
        return ('Error: Invalid codon')
   }; 
  }
  return protein 
};

