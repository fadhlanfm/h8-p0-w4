function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var alteredKalimat = '';

    for(i=0;i<kalimat.length;i++){
        var found = false;
        for(j=0;j<dictionary.length;j++){
            if(kalimat[i]==dictionary[j]){
                found = true;
                if(j<26){
                    alteredKalimat += dictionary[j+26];
                }else{
                    alteredKalimat += dictionary[j-26];                    
                }
            }
        }
        if(!found){
            alteredKalimat += kalimat[i];
        }
    }
    return alteredKalimat;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  