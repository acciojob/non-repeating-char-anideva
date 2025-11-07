function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
  // Count each character
  const count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Find first char with count 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character found
}

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
