module.exports = function check(str, bracketsConfig) {
  str=str.split("");
  let opening=[];
  let closing=[];
  let same=[];
  for (let i=0; i<bracketsConfig.length; i++) {
    if (bracketsConfig[i][0]==bracketsConfig[i][1]) {
      same.push(bracketsConfig[i][0]);
    } else {
      opening.push(bracketsConfig[i][0]);
      closing.push(bracketsConfig[i][1]);
    }
  }
  let stack=[];
  for (i=0; i<str.length; i++) {
    if (opening.includes(str[i])) {
      stack.push(str[i]);
    } else if (closing.includes(str[i])) {
      if (opening.indexOf(stack[stack.length-1])==closing.indexOf(str[i])) {
        stack.pop();
      } else return false;
    } else if (stack[stack.length-1]==str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
    if (stack.length==0) {
      return true;
    } else {
      return false;
    }
  }