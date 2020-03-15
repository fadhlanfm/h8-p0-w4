function urutkanAbjad(str) {
    // you can only write your code here!
    var dictionary = 'abcdefghijklmnopqrstuvwxyz';
    var abjadInArray = [];

    for(i=0;i<str.length;i++){
        abjadInArray.push([0, str[i]]);
    }

    for(i=0;i<abjadInArray.length;i++){
        for(j=0; j<dictionary.length;j++){
            if(abjadInArray[i][1] == dictionary[j]){
                abjadInArray[i][0]=j;
            }
        }
    }

    for(i=0;i<abjadInArray.length;i++){
        for(j=0;j<abjadInArray.length-i-1;j++){
            if(abjadInArray[j][0]>abjadInArray[j+1][0]){
                var tmp = abjadInArray[j];
                abjadInArray[j] = abjadInArray[j+1];
                abjadInArray[j+1] = tmp; 
            }
        }
    }

    var result = '';
    for(i=0;i<abjadInArray.length;i++){
        result += abjadInArray[i][1];
    }

    return result;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  