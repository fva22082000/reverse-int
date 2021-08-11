module.exports = function reverse (n) {
    n = Math.abs(n).toString();
    if (n.length == 1) {
      return n;
    }
    return n[n.length - 1] + reverse(n.substr(0, n.length - 1));
}
