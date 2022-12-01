function getPrimes(num) {
  return ","
    .repeat(num)
    .slice(0, -1)
    .split(",")
    .map(function (e, i) {
      return i + 1;
    })
    .filter(function (e) {
      return e > 1;
    })
    .filter(function (x) {
      return ","
        .repeat(x)
        .slice(0, -1)
        .split(",")
        .map(function (f, j) {
          return j;
        })
        .filter(function (e) {
          return e > 1;
        })
        .every(function (e) {
          return x % e !== 0;
        });
    });
}

const primes = getPrimes(1000);

console.log(primes);

function main(params) {
  var res = 0;
  for (var x of params) {
    res += x;
  }
  return res;
}

console.log(main(primes));
