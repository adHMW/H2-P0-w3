function ubahHuruf(kata) {
  // you can only write your code here!
  var a= kata.length
  var ubah =''
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var urutan = 0;

  for (var i=0; i< a; i++){
    urutan = alfabet.indexOf(kata[i]);
    ubah += alfabet[urutan+1];
  }

  return ubah
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu