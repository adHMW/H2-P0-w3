function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var hasil =0
  var angka1 =0
  var angka2= 0

  var output =[]

  var result= 0
  for (i=0; i <= angka; i++){
    
    if(angka % i === 0){
    hasil = angka/i
    var angka1 = String(i)
  	var angka2 = String(hasil)
  	output.push(angka1.length + angka2.length)

  	}
	}
  
	result = Math.min.apply(null, output)
	return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2