function ubahHuruf(kata) {
    // you can only write your code here!
    var dictionary = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';

    for(j=0;j<kata.length;j++){
        for(i=0;i<dictionary.length;i++){
            if(dictionary[i]==kata[j]){
                output = output + dictionary[i+1];
            }
        }
    }

    return output;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu