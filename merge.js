let numbers = [7,9,3,1,2,6,4,0,8,5];
let numbersWithDupes = [8,4,4,1,2,9,6,2];
const mergeSort = (nlist) => {
  if(nlist.length <= 1){
    return nlist;
  }
  let splitter = Math.floor(nlist.length/2);
  let left = nlist.splice(0,splitter);
  let listA = mergeSort(left);
  let listB = mergeSort(nlist);
  let sortedList = [];
  while(listA.length !== 0 && listB.length !== 0){
    if(listA[0] > listB[0]){
      sortedList.push(listB.splice(0,1)[0]);
    }
    else {
      sortedList.push(listA.splice(0,1)[0]);
    }
  }
  if(listA.length !== 0){
    sortedList = sortedList.concat(listA);
  }
  else{
    sortedList = sortedList.concat(listB);
  }

  return sortedList;
}
console.log(mergeSort(numbers));
console.log(mergeSort(numbersWithDupes));
