
function power_rec(x, n) {
  if (n == 0) {
    return 1
  }
  if (n == 1) {
    return x
  }

  const power_half = power_rec(x, Math.floor(n/2))
  if (n % 2 == 0) {
    return power_half * power_half
  } else {
    return x * power_half * power_half
  }
}

function power(x, n) {
  let result
  const n_abs = Math.abs(n)
  result = power_rec(x, n_abs)

  if (n < 0) {
    result = 1 / result
  }

  return result
}

console.log(power(2, -0))