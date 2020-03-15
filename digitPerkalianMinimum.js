function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var kumpulanFaktorPerkalian = [];
    for(i=1;i<=angka;i++){
        for(j=angka;j>0;j--){
            if(i * j == angka){
                kumpulanFaktorPerkalian.push([i, j]);
            }
        }
    }

    var panjangDigit = (kumpulanFaktorPerkalian[0][0].toString() + kumpulanFaktorPerkalian[0][1].toString()).length;
    
    for(i=1;i<kumpulanFaktorPerkalian.length;i++){
        if(panjangDigit > (kumpulanFaktorPerkalian[i][0].toString() + kumpulanFaktorPerkalian[i][1].toString()).length){
            panjangDigit = (kumpulanFaktorPerkalian[i][0].toString() + kumpulanFaktorPerkalian[i][1].toString()).length;
        }
    }

    return panjangDigit;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  