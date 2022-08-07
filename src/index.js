module.exports = function check(str, bracketsConfig) {
  let config = {};
  bracketsConfig.forEach(element => {
    config[element[0]] = element[1];
  });

  let stack = [];

  for (var i = 0; i < str.length; i++) {
    
    if (str[i] in config){
      if(!(str[i] == config[str[i]] && stack.length > 0 && stack[stack.length-1] == str[i])){
        stack.push(str[i]);
        continue;
      }
    }

    for (let k in config) {
      if (config[k] === str[i]) {
          if(stack.length == 0 || stack.pop() != k) {
            return false;
          }
      }
    }
  }
  return stack.length == 0;
}

