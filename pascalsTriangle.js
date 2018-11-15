function pascalsTri(num) {
  const tri = [[1], [1,1]];
  let temp = [1];

  if (num === 0 || num === 1) return tri[num];

  while (tri.length <= num) {
    let lastTri = tri[tri.length-1];
    for (let i = 0; i < lastTri.length-1; i++) {
      temp.push(lastTri[i] + lastTri[i+1]);
    }
    temp.push(1);
    tri.push(temp);
    temp = [1];
  }
  return tri[num];
}

pascalsTri(5)