function cariMedian(arr) {
    // you can only write your code here!
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    if(arr.length % 2 !== 0){
        return arr[arr.length/2 - 0.5];
    }else{
        return (arr[arr.length/2-1]+arr[arr.length/2])/2;
    }
}
  
  // TEST CASES
  console.log(cariMedian([4, 9, 1, 5])); // 4.5
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  