
//First Task - Dot Product Calculation in JavaScript:

function dotProduct(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length.");
  }

  let dotProductVal = 0;
  for (let i = 0; i < v1.length; i++) {
    dotProductVal += v1[i] * v2[i];
  }

  return dotProductVal;
}


//Second Task - Insertion Sort Algorithm in JavaScript:

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}
