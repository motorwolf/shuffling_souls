const random = (bottom,ceil) => {
  // returns a random number between bottom and ceil, ceil excluded.
  return Math.floor((Math.random() * ((ceil - 1) - bottom)) + bottom);
}

const shuffleInPlace = (array) => {
  // returns the array with the elements shuffled.
  for(let i = 0; i < array.length; i++){
    let holder = array[i];
    let swap_index = random(i,array.length);
    array[i] = array[swap_index];
    array[swap_index] = holder;
  }
  return array;
}
