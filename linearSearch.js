function linearSearch(t, arr){
    for (let i=0; i<arr.length; i++){
        if(t === arr[i]){
            return i;
        }
    }
            return -1;
}
console.log(linearSearch(5, [1,2,3,7,9]))

// has big O(n)