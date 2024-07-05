const sortColors = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    let i = 0;
    let temp;

    while (i <= high) {
        if (arr[i] === 2) {
            temp = arr[i];
            arr[i] = arr[high];
            arr[high] = temp;
            high--;
        } else if (arr[i] === 1) {
            i++;
        } else {
            temp = arr[i];
            arr[i] = arr[low];
            arr[low] = temp;
            low++;
            i++;
        }
    }
    return arr;
};

console.log(sortColors([2,0,2,1,1,0])); // Output: [0, 0, 1, 1, 2, 2]
