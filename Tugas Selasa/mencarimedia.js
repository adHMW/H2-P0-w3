function cariMedian(arr) {
  // you can only write your code here!
  var a = arr.length
  var med = 0
  var tampungmed = 0
  
   if( a % 2 === 0){
     med = a/2
     tampungmed = (arr[med] + arr[med - 1])/2
   
   }else{
     med= Math.round(a/2);

     tampungmed = arr[med]

   }
//console.log(tampungmed)
return tampungmed
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5