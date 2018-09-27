module.exports = function solveEquation(equation) {
  let a = +equation.substring(0, (equation.search(/x\^2/) - 3));
  let signB = equation.substr(equation.search(/x\^2/) + 4, 1);
  let b = +equation.substring((equation.search(/x\^2/) + 6), (equation.search(/x\s/) - 3));
  let signC = equation.substr(equation.search(/x\s/) + 2, 1);
  let c = +equation.substring((equation.search(/x\s/) + 4), (equation.length));
  if (signB === '-') {
    b = -b;
  }
  if (signC === '-') {
    c = -c;
  }
  let d = Math.sqrt(b * b - 4 * a * c);
  let x1 = Math.round((-b - d) / (2 * a));
  let x2 = Math.round((-b + d) / (2 * a));
  return [x1, x2].sort(function (a, b) {
    return a - b;;
  });
}
