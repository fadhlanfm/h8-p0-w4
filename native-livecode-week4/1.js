/**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 * 
 */

/* 
START OF PSEUDOCODE

  PROCEDURE getStudents
    READ grades: array of integer, 
      names: array of string

    IF length of grades IS EQUAL TO zero THEN
      PRINT 'grades should not be empty'
      EXIT
    ELSE IF length of names IS EQUAL TO zero THEN
      PRINT 'names should not be empty'
      EXIT
    ELSE
      SET average <= 0,
        sum <= 0,
        outstandingGrades <= empty array,
        outstandingNames <= empty array
      
      FOR each element of grades
        ADD selected element of grades to sum
        SET average <= sum divided by length of grades
      END FOR

      FOR each element of grades
        IF selected element of grades IS GREATER THAN average THEN
          INSERT [index of selected element of grades, selected element of grades] to outstandingGrades
        END IF
      END FOR

      FOR each element of outstandingGrades
        FOR each element of names
          IF first element of selected outstandingGrades IS EQUAL TO index of selected element of name THEN
            INSERT selected element of names to outstandingNames
          END IF
        END FOR
      END FOR

    PRINT outstandingNames
    EXIT
  END PROCEDURE


END OF PSEUDOCODE
*/

function getStudents(grades, names) {
  // Your Code here
  
  if(grades.length==0){
    return 'grades should not be empty'
  }else if(names.length==0){
    return 'names should not be empty'
  }else{
    var average = 0;
    var sum = 0;
    var outstandingGrades = [];
    var outstandingNames = [];

    for(i=0;i<grades.length;i++){
      sum += grades[i];
      average = sum / grades.length;
    }

    for(i=0;i<grades.length;i++){
      if(grades[i]>average){
        outstandingGrades.push([i, grades[i]]);
      }
    }

    for(i=0;i<outstandingGrades.length;i++){
      for(j=0;j<names.length;j++){
        if(outstandingGrades[i][0]==j){
          outstandingNames.push(names[j]);
        }
      }
    }
    return outstandingNames;
  }
}

var grades1 = [10, 9, 8, 7, 6, 8];
var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
console.log(getStudents(grades1, studentNames1));
// [ 'Tony', 'Tifa' ]

var grades2 = [3, 9, 4, 6];
var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
console.log(getStudents(grades2, studentNames2));
// [ 'Rama', 'Fauzan' ]

var grades3 = [];
var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
console.log(getStudents(grades3, studentNames3));
// grades should not be empty

var grades4 = [5, 3, 2, 10, 5];
var studentNames4 = [];
console.log(getStudents(grades4, studentNames4));
// student name should not be empty

