function interest(P, R, n) {
  return P + P*n*(n+1)*R/2.;
}

function nut(principal, rate, interval, deposit=0.) {
  // calculates value of `principal` dollars, after `interval` years,
  // at the compounding `rate` with yearly `deposit`s.

  var maturity = deposit * interval * (1 + (interval)*rate/2);

  return interest(principal, rate, interval) + maturity;

}

console.log(nut(100., 0.05, 0., 10.));
console.log(nut(100., 0.05, 1., 10.));
console.log(nut(100., 0.05, 2., 10.));
