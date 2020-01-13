/**
 * 
 * ================
 * Follow the guide
 * ================
 * 
 * Diberikan sebuah function untuk mencari dimanakah pion akan berhenti,
 * berdasarkan guide yang ada.
 * Function ini menerima 2 parameter yaitu array multidimensi yang mewakilkan sebuah board
 * dan array guide yaitu, urutan ke arah mana saja pion akan berjalan
 * 
 * pion di tandakan dengan "*"
 * 
 * Output adalah board array multidimensi dengan lokasi pion terakhir , mengikuti array guide
 * yang telah di berikan
 *  "↓" -> ke bawah
 *  "←" -> ke kiri
 *  "↑" -> ke atas
 *  "→" -> ke kanan 
 * 
 * Jika guide melebihi panjang dan lebar board, maka pion akan tetap berada,
 * pada posisi terakhir yang dapat di jangkau oleh pion.
 * 
 * Asumsikan posisi terakhir pion pasti berada dalam board
 * 
 * RULES: 
 *  - dilarang menggunakan .indexOf .lastIndexOf .set .findIndex .includes .reduce .reduceRight
 */

// asumsikan guide tidak akan melebihi panjang dan lebar board
// dilarang menggunakan .indexOf .lastIndexOf .set .findIndex .includes .reduce .reduceRight
function play (board, guide) {
  var boardRow = board.length;
  var boardColumn = board[0].length;

  var position = [0,0];
  var output = [];
  

  for(row=0;row<board.length;row++){
    for(column=0;column<board[row].length;column++){
      if(board[row][column]=="*"){
        position = [row, column];
      }
    }
  }

  for(i=0;i<guide.length;i++){
var guide1 = ["↓", "↓", "↓", "↓", "←", "↑", "→"];
    switch(guide[i]){
      case "↓" :
        position[0]++;
        if(position[0]>boardRow-1){
          position[0]=boardRow-1;
        }
        break; 
      case "←" :
        position[1]--;
        if(position[1]<=0){
          position[1]=0;
        }
        break;
      case "↑" :
        position[0]--;
        if(position[0]<=0){
          position[0]=0;
        }
        break;
      case "→" :
        position[1]++;
        if(position[1]>boardColumn-1){
          position[1]=boardColumn-1;
        }
        break;  
    }
  }

  //now position is final position
  for(row=0;row<boardRow;row++){
    var subOutput = [];
    for(column=0;column<boardColumn;column++){
      if(row==position[0] && column==position[1]){
        subOutput.push('*');
      }else{
        subOutput.push('');
      }
    }
    output.push(subOutput);
  }

  return output;

}


var board1 = [
  ["","","","*",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""]
];
var guide1 = ["↓", "↓", "↓", "↓", "←", "↑", "→"];
console.log(play(board1, guide1));
// [
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '*', '' ],
//   [ '', '', '', '', '' ]
// ]

var board2 = [
  ["","","","",""],
  ["","","","",""],
  ["","*","","",""],
  ["","","","",""]
];

var guide2 = ["←", "←", "↑", "↑", "→"];

console.log(play(board2, guide2));
// [
//   [ '', '*', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ]
// ]