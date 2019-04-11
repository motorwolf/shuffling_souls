let bubbles = [4, 2, 7, 8];
let bubbles2 = [2,3,7,9,7,9,0]
let bub3 = [2,9,7,7,9,0];
const bubbleSort = (arr) => {
  let swapped = true;
  while(swapped === true){
  swapped = false;
  for(let i = 1; i < arr.length; i++){
    if(arr[i - 1] > arr[i]){
        let holder = arr[i];
        arr[i] = arr[i-1];
      arr[i-1] = holder;
        swapped = true;
      }
  }
  }
  return arr;
}

