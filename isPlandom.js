const isPalindrome = (str) => {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  return reversedString === str;
};

isPalindrome(101); // Output: true
isPalindrome("A man, a plan, a canal: Panama"); // Output: true
isPalindrome("hello"); // Output: false
isPalindrome("level"); // Output: true
