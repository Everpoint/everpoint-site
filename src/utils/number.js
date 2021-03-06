export function rateLimit(n, min, max) {
  if (n < min) {
    return min;
  } else if (n > max) {
    return max;
  } else {
    return n;
  }
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
