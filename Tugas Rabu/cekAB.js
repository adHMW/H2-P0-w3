function checkAB(num) {
  // you can only write your code here!
  var a=num.length
  var found = false
  for (var i=0; i < a; i++){
    if (num[i] ==='a' && num[i+4] == 'b'|| num[i] ==='b' && num[i+4] == 'a'){
        found = true
     }
  }
return found
  // var n = num.indexOf("a")
  // var m = num.indexOf("b")
  // var hasil3 = m- n
  // var hasil4 = n - m

//   if(hasil3 === 4 || hasil4 === 4){
//     return true
//   }else{
//     return false
//   }
  // console.log (hasil2)
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false