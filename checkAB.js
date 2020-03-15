function checkAB(num) {
    // you can only write your code here!
    var positionA = [];
    var positionB = [];
    for(i=0;i<num.length;i++){
        if(num[i]=='a' || num[i]=='A'){
            positionA.push(i);
        }else if(num[i]=='b' || num[i]=='B'){
            positionB.push(i);
        }
    }
    
    for(i=0;i<positionA.length;i++){
        for(j=0;j<positionB.length;j++){
            if(positionB[j]-positionA[i]==4 || positionA[i]-positionB[j]==4){
                return true;
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  