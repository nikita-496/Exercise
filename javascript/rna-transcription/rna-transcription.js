const RNA = {
  "G" : "C",
  "C" : "G",
  "T" : "A",
  "A" : "U"
}

const toRna = (DNA) => { 
  
  let regex = new RegExp("[" + Object.keys(RNA).join("") + "]","g")
  let transfer = DNA.replace(regex, replacer)

  function replacer (match) {
    return RNA[match]
  }
  return transfer
};

/*
const DNA = "ACGTGGTCTTAA";
console.log(toRna(DNA))
*/
