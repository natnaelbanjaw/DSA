function recursiveBS(t, arr, left = 0, right = arr.length-1){
    if (left > right){
        return -1
    }

    let middle = Math.floor((left + right)/2);
    
    if (arr[middle] === t){
        return middle;
    }

    if (arr[middle] < t){
        return recursiveBS(t, arr, middle+1, right);
}
    else{
return recursiveBS(t, arr, left, right=middle-1)
    }
}
console.log(recursiveBS(5, [5])); // 0

//big O(logn)
