const primaryRange = [0,3,4,5,8,9,10,11,15,18,19]

function rangeToIntervals (range) {
	let isInterval = false;
	let result = [];
	let first = range[0];
	for (i = 1; i <= range.length; i++) {
		let cur = range[i];
		let prev = range[i-1];
		if (cur-prev===1) {
			isInterval = true;
		}
		else {
			if (!isInterval) {
				result.push(prev.toString());
				first = cur;
			}
			else {
				isInterval = false;
				result.push(first.toString() + "-" + prev.toString());
				first = cur;
			}
		}
	}	
	return result.join(", ");
}

console.log(rangeToIntervals(primaryRange))