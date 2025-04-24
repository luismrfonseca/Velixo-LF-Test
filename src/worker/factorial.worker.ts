const cache = new Map<number, string>();


const factorialBigInt = (n: number): bigint => {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result;
  };
  
  self.onmessage = function (e) {
    const { N } = e.data;
    const results: bigint[] = [];
    
    for (let i = 1; i <= N; i++) {
        results.push(factorialBigInt(i));
    }
  
    postMessage(results);
  };