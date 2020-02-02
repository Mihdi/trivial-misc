// Write JavaScript here 
document.writeln(JSON.stringify(getPalindromeDates(2020, 3031), null, 4));

function getPalindromeDates(startYear, endYear){
  var output = [];
  var d, m, y;
  for(y = startYear; y < endYear; y++ ){
    for(m = 1; m < 13; m++){
      for(d = 1; d < 32; d++){
        if(isValidDate(d, m, y)){
          var s = stringifyDate(d, m, y);
          if(isValidPalindrome(s)){
            output.push(s);
          }
        }
      }
    }
  }
  return output;
}

function isValidDate( d, m, y){
  var m28 = [2];
  var m30 = [4,6,9,11];
  var m31 = [1,3,5,7,8,10,12];
  
  if(d < 32 && m in m31) return true;
  
  if(d < 31 && (m in m30)) return true;
  
  if(d < 29 || (d == 29 && isLeapYear(y))) return true;
  
  return false;
}

function isLeapYear(y){
  if(y % 400 == 0) return true;
  if(y % 100 == 0) return false;
  if(y % 4 == 0) return true;
  return false;
}

function stringifyDate(d, m, y){
  if(d < 10){ 
    d = "0"+d;
  }else{
    d += "";
  }
  if(m < 10){
    m = "0"+m;
  }else{
    m += "";
  }
  
  return d+m+y;
}
function isValidPalindrome(str){
  for(var i = 0; i < (str.length/2); i++){
    if(str.charAt(i) != str.charAt(str.length-i-1))return false;
  }
  return true;
}
