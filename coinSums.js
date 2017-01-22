function coinSums(val, denominations, wallet = [], results = []) {
  if (val < 0) {
    return;
  }

  if (val === 0) {
    return results.push(wallet);
  }

  for (let i = 0; i < denominations.length; i++) {
    coinSums(val - denominations[i], denominations, [...wallet, denominations[i]], results)
  }

  return results;
}