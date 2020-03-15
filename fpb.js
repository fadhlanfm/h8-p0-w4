function fpb(angka1, angka2) {
    // you can only write your code here!
    var faktorAngka1 = [];

    for(i=1;i<angka1;i++){
        if(angka1 % i == 0){
            faktorAngka1.push(i);
        }
    }

    for(i=faktorAngka1.length-1;i>=0;i--){
        if(angka2 % faktorAngka1[i] == 0){
            return faktorAngka1[i];
        }
    }

    return faktorAngka1[0];
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1 
  