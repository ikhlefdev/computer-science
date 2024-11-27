function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop to traverse the array
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
        
            // If the current element is greater
            // than the next element
            if (arr[j] > arr[j + 1]) {
            
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; 
            }
        }

        // If no two elements were swapped by inner loop,
        // then break the loop
        if (!swapped)
            break;
    }
}


function insertionSort(array) {
    let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
    return array;
}








function mergeSort(array){
    if (array.length===1){
        return array
    }
    else{
        const mid=array.length/2
        const left=mergeSort(array.slice(0,mid))
        const right=mergeSort(array.slice(mid))
        return merge(left,right)
    }

}

function merge(left,right){
    let result=[]
    let i=0 , j=0
    while (i<left.length && j<right.length){
        if (left[i]<right[j]){
           result.push(left[i])
           i++
        }
        else{
            result.push(right[j])
            j++
        }

    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}




export function selectionSort(array) { 
    let n = array.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return inputArr;
}




