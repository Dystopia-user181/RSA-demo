const p = 41, q = 67, n = p * q, l = (p-1)*(q-1), e = 7, d = 2263;

function modExp(a, n, m) {
	let ans = 1;
		console.log(a, n)
	while (n) {
		if (n & 1) ans *= a; ans = ans % m;
		a *= a; a = a % m;
		n >>= 1;
	}
	return ans;
}

document.getElementById("m").addEventListener("input", xx => {
	let m = Number(xx.target.value);
	let mp = modExp(m, e, n);
	document.getElementById("m'").innerHTML = `m' = m<sup>e</sup> = ${mp}`;
});

document.getElementById("m'in").addEventListener("input", xx => {
	let mp = Number(xx.target.value);
	let mpp = modExp(mp, d, n);
	document.getElementById("m''").innerHTML = `m'' = m'<sup>d</sup> = ${mpp}`;
});