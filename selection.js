const selectionSort = (arr) => {
  let smallest;
  let smallInx = 0;
  let sortedIndex = 0;
  while(sortedIndex !== arr.length - 1){
    smallest = arr[sortedIndex];
    for(let i = sortedIndex; i < arr.length; i++){
    if(arr[i] <= smallest){
      smallest = arr[i];
      smallInx = i;
    }
  }
  let temp = arr[sortedIndex];
  arr[sortedIndex] = arr[smallInx];
  arr[smallInx] = temp;
  sortedIndex++;
  }
  return arr;
}
