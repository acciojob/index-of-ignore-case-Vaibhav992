function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s1 === null || s2 === null) return -1;

  // If subStr is empty → return 0 (like normal indexOf behavior)
  if (s2 === "") return 0;

  // Convert both strings to lowercase
  const str = s1.toLowerCase();
  const subStr = s2.toLowerCase();

  return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
