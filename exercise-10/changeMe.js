function changeMe(arr) {
    // you can only write your code here!
    for(i=0;i<arr.length;i++){
        if(arr[i][3] && 2020-arr[i][3]>0){
            console.log(`${i}. { firstName: '${arr[i][0]}', lastName: '${arr[i][1]}', gender: '${arr[i][2]}', age: '${2020-arr[i][3]}'}`)
        }else{
            console.log(`${i}. { firstName: '${arr[i][0]}', lastName: '${arr[i][1]}', gender: '${arr[i][2]}', age: 'Invalid birth year'}`)
        } 
        
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""