
function cariModus(arr) {

	var hasil = [];
	var proses = 0; 
  var a= arr.length
  
  var sort = arr.sort(function(a, b){return a - b});
  
  for(var i=0; i<a; i++){
    if ( arr[i]===arr[i+1]){
      hasil.push(arr[i])
    }
    if (hasil.length === a-1 || hasil.length === 0) {
 	    hasilmodus = 0-1
 	  } else {
 	    hasilmodus = hasil[0]
    }
  }
  return hasilmodus

  //console.log(sort)
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1