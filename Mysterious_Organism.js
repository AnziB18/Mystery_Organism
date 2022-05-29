// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// factory function (or constructor func) named pAequorFactory() with two parameters
const pAequorFactory = ( specimenNum, dna ) => {
  return {    
    specimenNum,
    dna,
  }
};
// hard coded test for the factory function
const dna1 = mockUpStrand();
console.log(dna1)
const ex1 = pAequorFactory(1, dna1);
console.log(ex1);
