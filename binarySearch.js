function binarySearch(t, arr){
    left = 0;
    right = arr.length -1;
    while(left <= right){
        let middle = Math.floor((left + right)/2)
if (t === arr[middle]){
    return middle;
}
if (t > arr[middle]){
    left = middle +1;
} 
else
    right = middle -1;
 } 
   return -1;

}
console.log(binarySearch(3, [1,2,3,7,9]))

//big O(logn)