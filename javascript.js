//Task 1. Reverse String

function reverseString(str) {
	var i = str.length -1,
		p = '' ;
	for (i; i >= 0; i-- ){
		p += str[i];
	};
	return p;
};
console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));

//Task 2. Factorialize a Number
function factorialize(num) {
	if (num === 0 || num === 1)
		return 1;
	for (var i = num -1; i >= 1; i--) {
		num *= i;
		}
	return num;
}
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));