accum.js
function accum(s) {
  // your code
  var result = [];
  for (var i = 0; i < s.length; i++) {

     result.push(s[i].toUpperCase() + Array(i+1).join(s[i])); 

  }
  return result.join("-");
}



function accum(s) {
  // your code
  var result = [];
  for (var i = 0; i < s.length; i++) {

     result.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());  

  }
  return result.join("-");
}

accum("ZpglnRxqenU")
//accum("abcd") //--> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") //--> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") //--> "C-Ww-Aaa-Tttt"