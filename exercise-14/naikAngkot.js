function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result = []
  if(arrPenumpang.length<1){
      return result
  }else{
      for(i=0;i<arrPenumpang.length;i++){
          let penumpang = {}
          penumpang.penumpang = arrPenumpang[i][0]
          penumpang.naikDari = arrPenumpang[i][1]
          penumpang.tujuan = arrPenumpang[i][2]
          for(x=0;x<rute.length;x++){
            for(y=0;y<rute.length;y++){
                if(rute[x]==arrPenumpang[i][1] && rute[y]== arrPenumpang[i][2]){
                    var bayar = (y-x)*2000;
                    if(bayar>0){
                        penumpang.bayar = bayar
                    }else{
                        penumpang.bayar = bayar * -1
                    }
                }
            }
          }
        result.push(penumpang) 
      }
      return result
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]