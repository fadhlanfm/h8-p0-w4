function highestScore (students) {
  // Code disini
  let output = {}
  if(students.length<1){
    return output
  }else{
    let holdedClass = students[0]['class']
    
    output[holdedClass] = {}
    for(i=1;i<students.length;i++){
        let isFound = false
        if(holdedClass == students[i]['class']){
            isFound = true;
        }else if(!isFound){
            output[students[i]['class']] = {}
        }
    }

    for(i in output){
        for(j=0;j<students.length;j++){
            if(i == students[j]['class'] && !output[i].hasOwnProperty('score')){
                output[i]['name']=students[j]['name']
                output[i]['score']=students[j]['score']
            }else if(i == students[j]['class'] && output[i].hasOwnProperty('score') && output[i]['score']<students[j]['score']){
                output[i]['name']=students[j]['name']
                output[i]['score']=students[j]['score']
            }
        }
    }
    return output
  }
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([
    {
      name: 'Alexander',
      score: 60,
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
    },
    {
        name: 'Axelsen',
        score: 81,
        class: 'tigers'
      }
  ]));
  
  // {
  //   foxes: { name: 'Vladimir', score: 92 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }

console.log(highestScore([])); //{}