function isPythagoreanTriple(integers) {
	let [a,b,c] = [...integers];
	return ((a*a + b*b == c*c) || (a*a + c*c == b*b) ||(c*c + b*b == a*a))
  }

  console.log(isPythagoreanTriple([1,2,3]));
