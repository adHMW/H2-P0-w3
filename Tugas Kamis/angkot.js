function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  // var jarak = 0
  // for (var j=0; j< rute.length; j++){
  //   jarak = i + 1
  // }
  // console.log(jarak)
  


  // -------------------------
  var listangkotObj = [];
  
  for(var i = 0; i < arrPenumpang.length; i++) {
    var start = 0;
    var finish = 0;
    for(var j = 0; j< rute.length; j++){
      if(rute[j] === arrPenumpang[i][1]){
        start = j;
      }
      if(rute[j] === arrPenumpang[i][2]){
        finish = j;
      }
    }

    var naikangkotObj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: Math.abs((finish - start) * 2000),
    };
    listangkotObj.push(naikangkotObj);
  }
  
   return listangkotObj

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]