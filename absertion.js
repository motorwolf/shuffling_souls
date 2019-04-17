// what kind of sort is this??

let numbers = [7,9,3,1,2,6,4,0,8,5];
let nums = [3,2,1,4];
const sortie = (arr) => {
  if(arr.length <= 1){
    return arr;
  }
  let targetNumber = arr.pop();
  let greater = [];
  let less = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > targetNumber){
      greater.push(arr[i]);
    }
    else {
      less.push(arr[i]);
    }
  }
  console.log(greater,less);
  return sortie(less).concat(targetNumber).concat(sortie(greater)); //+ targetNumber + greater;//insertionSort(less) + targetNumber + insertionSort(greater);
};
console.log(sortie(numbers));
