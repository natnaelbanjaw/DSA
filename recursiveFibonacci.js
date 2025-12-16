function recursiveFibonacci(n){
    if (n<2){
        return n;
    }
    return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
}

//it have time complexity big O(2 the power of n), for n number of calls