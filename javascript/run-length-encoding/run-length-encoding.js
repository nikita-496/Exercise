

export const encode = () => {
  let  codeStr =  '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str [i] === str[i+1]) {
     count ++;
      i++;
    }
    count === 1 ? codeStr += str[i] : codeStr += count + str[i];
  }
  return codeStr;
};

export const decode = () => {
  let newStr = '';
  let replacer = (n) => {
  n.length === 1 ? n : n = String(n.match(/[^\d]/g)).repeat(parseInt(n))
    return newStr += n;
  }
    str.replace(/(\d+)(\w|\s)|(\w|\s)/g, replacer)
    return newStr;
};
