function graduates (students) {
  // Code disini
  let output = {}
  if(students.length<1){
      return output
  }else{
      // output[students[0]['class']] = {[]}
      for(i=0;i<students.length;i++){
        if(students[i].score>75){
          output[students[i]['class']] = []
        }
      }

      for(i=0;i<students.length;i++){
          for(j in output){
            if(!output.hasOwnProperty(students[i]['class']) && students[i]['score']>75){
              output[students[i]['class']] = []
            }else if(j==students[i]['class'] && students[i]['score']>75){
              output[j].push(students[i].name, students[i].score)
            }    
          }
      }
      return output
  }
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}