// general random function
const generateRandom = (num) => {
  return Math.floor(Math.random() * num);
}
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[generateRandom(4)];
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
const dna1 = mockUpStrand(); //console.log(dna1)
const ex1 = pAequorFactory(1, dna1);
const dnaEx1 = ex1.dna;
//const dnaMocked = ['A', 'A', 'G', 'C', 'C', 'G', 'A', 'T', 'A', 'T', 'G', 'C', 'T', 'C', 'G'];
console.log(dnaEx1);
// mutate func
pAequorFactory.mutate = (arr) => {
// random num to manage how often loop is called to change ("mutate") a array item
const randomNumForLoop = generateRandom(4)+1;
const randomNumForLoop1 = generateRandom(3)+1;
// shallow copy of first Array, so I can mutate it without changing first array!!!
let newArr = arr.slice();
  // iterate through first DNA base with 4 single bases
  for (let x = 0 ; x < newArr.length - (10 + randomNumForLoop) ; x ++){ 
    //console.log(`1st loop: ${arr[x]}`)
      // random num with index between 1 and 4
      const randomIndex = generateRandom(4); 
      // check which single DNA base in array at random Index is same as the 4 single DNA bases
      if(newArr[randomIndex] === 'A' || newArr[randomIndex] === 'T' || newArr[randomIndex] === 'G' || newArr[randomIndex] === 'C'){ //console.log(arr[randomIndex]); console.log(arr.indexOf(arr[randomIndex])); 
        // filter out single DNA base, which is allready in array on the random Index
        const replaceOne = ['A', 'T', 'C', 'G'].filter(item => item != newArr[randomIndex]); //console.log(replaceOne);
        //replace single base with a new, filtered single DNA base
        newArr.splice(randomIndex, 1, replaceOne[generateRandom(replaceOne.length)]); //console.log(`This is 1st loop Array: ${arr}`);
      }
  }
  // iterate through second DNA base with 4 single bases
  for (let x = newArr.length - 11; x < newArr.length - (6 + randomNumForLoop); x ++ ){ //console.log(`2nd loop: ${arr[x]}`)
    // random num with index between 5 and 8
    const randomIndex1 = 4 + generateRandom(4); 
      // check which single DNA base in array at random Index is same as the 4 single DNA bases
      if(newArr[randomIndex1] === 'A' || newArr[randomIndex1] === 'T' || newArr[randomIndex1] === 'G' || newArr[randomIndex1] === 'C'){ //console.log(arr[randomIndex]); console.log(arr.indexOf(arr[randomIndex])); 
        // filter out single DNA base, which is allready in array on the random Index
        const replaceOne = ['A', 'T', 'C', 'G'].filter(item => item != newArr[randomIndex1]); //console.log(replaceOne);
        //replace single base with a new, filtered single DNA base
        newArr.splice(randomIndex1, 1, replaceOne[generateRandom(replaceOne.length)]); //console.log(`This is 2nd loop Array: ${arr}`);
      }
  }
  // iterate through third DNA base with 4 single bases
  for (let x = newArr.length - 7; x < newArr.length - (2 + randomNumForLoop); x ++ ){ 
    //console.log(`3rd loop: ${arr[x]}`)
      //random num with index between 9 and 11
      const randomIndex2 = 8 + generateRandom(4);
      if(newArr[randomIndex2] === 'A' || newArr[randomIndex2] === 'T' || newArr[randomIndex2] === 'G' || newArr[randomIndex2] === 'C'){ //console.log(arr[randomIndex]); console.log(arr.indexOf(arr[randomIndex])); 
        const replaceOne = ['A', 'T', 'C', 'G'].filter(item => item != newArr[randomIndex2]); //console.log(replaceOne);
        newArr.splice(randomIndex2, 1, replaceOne[generateRandom(replaceOne.length)]); //console.log(`This is 3rd loop Array: ${arr}`);
      }
  }
  // iterate through fourth DNA base with 3 single bases
  for (let x = newArr.length - 3; x < newArr.length - randomNumForLoop1; x ++ ){  //console.log(`4th loop: ${newArr[x]}`)
    // random num with index between 12 and 14
    const randomIndex3 = 12 + generateRandom(3); 
      if(newArr[randomIndex3] === 'A' || newArr[randomIndex3] === 'T' || newArr[randomIndex3] === 'G' || newArr[randomIndex3] === 'C'){ //console.log(newArr[randomIndex3]); console.log(newArr.indexOf(newArr[randomIndex3])); 
        const replaceOne = ['A', 'T', 'C', 'G'].filter(item => item != newArr[randomIndex3]); //console.log(replaceOne);
        newArr.splice(randomIndex3, 1, replaceOne[generateRandom(replaceOne.length)]); //console.log(`This is last loop Array: ${newArr}`);
      }
  } 
  return newArr;
}
const ex2 = pAequorFactory(2,dnaEx1)
const dnaEx2 =pAequorFactory.mutate(dnaEx1);
console.log(dnaEx1);
console.log(dnaEx2);