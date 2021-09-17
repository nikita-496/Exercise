type Nucleotide = {
  [key: string] : string 
}  

const nucleotideList: Nucleotide = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U" 
}

export function toRna(dna: string): string {
  let rna: string = ""
  for(let i=0; i < dna.length; i++) {
    let isNucleotide: string = nucleotideList[dna[i]]
    if (isNucleotide) {
      rna += isNucleotide 
    } else {
      throw new Error('Invalid input DNA.')
    }
  }
  return rna
}
