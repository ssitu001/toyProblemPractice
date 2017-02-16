const numToAlphabets = (num, cached = {}, currBuilt = '') => {
  const alphas = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    6:"f",
    7:"g",
    8:"h",
    9:"i",
    10:"j",
    11:"k",
    12:"l",
    13:"m",
    14:"n",
    15:"o",
    16:"p",
    17:"q",
    18:"r",
    19:"s",
    20:"t",
    21:"u",
    22:"v",
    23:"w",
    24:"x",
    25:"y",
    26:"z",
  };

  if(!num) return cached[currBuilt] = true;
  num = num.toString();

  if(alphas[num.slice(0,1)]) numToAlphabets(num.slice(1), cached, currBuilt.concat(alphas[num.slice(0,1)]))
  if(alphas[num.slice(0,2)]) numToAlphabets(num.slice(2), cached, currBuilt.concat(alphas[num.slice(0,2)]))
  return Object.keys(cached);

}

console.log(numToAlphabets(11128));