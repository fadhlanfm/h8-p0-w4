function sort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function cariModus(arr) {
    // you can only write your code here!
    var frekuensiCalonModus = [];

    for(i=0;i<arr.length;i++){
        if(frekuensiCalonModus[arr[i]]==null){
            frekuensiCalonModus[arr[i]]=1;
        }else if(frekuensiCalonModus[arr[i]]>=0){
            frekuensiCalonModus[arr[i]]++;
        }
    }

    var largest = [];
    var i = 0;
    while(!largest[1]){
        if(frekuensiCalonModus[i]){
            largest = [frekuensiCalonModus[i], i];
        }
        i++;
    }

    var numCounter = 0;
    for(i=0;i<frekuensiCalonModus.length;i++){
        if(frekuensiCalonModus[i]){
            numCounter++;
            if(frekuensiCalonModus[i]>largest[0]){
                largest = [frekuensiCalonModus[i], i];
            }
        }
    }

    if(numCounter>1){
        return largest[1];
    }else{
        return -1;
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // 1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1