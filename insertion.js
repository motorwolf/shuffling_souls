let numbers = [7,9,3,1,2,6,4,0,8,5];
const insertionSort = (arr) => {
  let sortedList = [arr.pop()];
  let loopDuration = arr.length; // else as we mutate arr and the length value changes, we stop prematurely.
  for(let i = 0; i < loopDuration; i++){
    let newValue = arr.pop();
    console.log(newValue);
    for(let j = 0; j < sortedList.length; j++){
      if(sortedList[j] < newValue){
        if(j+1 >= sortedList.length){
          // preventing a range error in the case of number being the highest in our sortedList.
          sortedList.splice(j+1,0,newValue);
        }
      }
      if(sortedList[j] > newValue){
        sortedList.splice(j,0,newValue);
        break;
      }
    }
  }
  return sortedList;
};
console.log(insertionSort(numbers));
