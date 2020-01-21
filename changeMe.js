function changeMe(arr) {
    // you can only write your code here!
    if(arr.length==0){
        console.log( '""')
    }else{
        let person = [];
    let person1 = [];
    for(i=0;i<arr.length;i++){
        person.push(`${i+1}. ${arr[i][0]} ${arr[i][1]}`)
    }
    
        for(j=0;j<arr.length;j++){
            var subObj = {}
            if(arr[j].length==4 && 2020-arr[j][3]>0){
                subObj.firstName = arr[j][0]
                subObj.lastName =  arr[j][1]
                subObj.gender = arr[j][2]
                subObj.age = 2020 - arr[j][3]
            }else{
                subObj.firstName = arr[j][0]
                subObj.lastName = arr[j][1]
                subObj.gender = arr[j][2]
                subObj.age = 'Invalid Birth Year'
            }
            person1.push(subObj) 
        }
        
    for(i=0;i<person.length;i++){
        for(j=0;j<person1.length;j++){
            if(i==j){
                console.log(person[i])
                console.log(person1[i])
            }
        }
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