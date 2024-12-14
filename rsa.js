const p = 1282529n, q = 1524181n, n = p * q, e = 11n, d = 1777094115491n;

function modExp(a, n, m) {
	let ans = 1n;
	while (n) {
		if (n & 1n) ans *= a; ans = ans % m;
		a *= a; a = a % m;
		n = n >> 1n
	}
	return ans;
}

document.getElementById("m").addEventListener("input", xx => {
	let m = BigInt(xx.target.value);
	let mp = modExp(m, e, n);
	document.getElementById("m'").innerHTML = `m' = m<sup>e</sup> = ${mp}`;
});

document.getElementById("m'in").addEventListener("input", xx => {
	let mp = BigInt(xx.target.value);
	let mpp = modExp(mp, d, n);
	document.getElementById("m''").innerHTML = `m'' = m'<sup>d</sup> = ${mpp}`;
});