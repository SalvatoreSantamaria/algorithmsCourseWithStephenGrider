// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) { //after this loop runs, the above loop starts again, but it slowly shrinks by one. IE, if i = 2, then the j loop runs thru everything but the very last two items, because they have been sorted as the largest two
      if (arr[j] > arr[j + 1]) { //if value is greater than the next one
        const lesser = arr[j + 1]; //swap the values (this pushes largest value to the end on first j loop)
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
