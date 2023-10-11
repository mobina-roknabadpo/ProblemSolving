function pickingNumbers(a) {
    // Write your code here
    const sorted = a.sort((a,b) => a-b);
    let i=0;
    let j=1;
    while(i < sorted.length && j < sorted.length){
        if(Math.abs(sorted[i] - sorted[j]) > 1){
            i++;
            j++;
        }else{
            j++;
        }
    }
    return Math.abs(i-j)

}
pickingNumbers([4, 6, 5, 3, 3, 1]);
