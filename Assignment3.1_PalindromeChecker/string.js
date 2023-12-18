function check() {
  // grab the users word
  var userInp = document.getElementById("userWrd").value;

  // lowercase all letters
  var lowerWrd = userInp.toLowerCase();
  // place the answer in the <div> of the HTML page
  document.getElementById("answer1").innerHTML = "You entered: " + lowerWrd;

  // reverse word
  // Step One: use split
  var splitWrd = lowerWrd.split("");
  // Step Two: Reverse
  var reverseWrd = splitWrd.reverse();
  // Step 3: Join Words
  var joinWrd = reverseWrd.join("");

  document.getElementById("backWrd").innerHTML = "Backwards: " + joinWrd;

  // create if function to check if word is Palindrome
  if (joinWrd == lowerWrd) {
    document.getElementById("result").innerHTML = joinWrd + " is a Palindrome!";
  } else {
    document.getElementById("result").innerHTML = userInp + " is not a Palindrome!";
  }
}
