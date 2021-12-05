function reverseString(str) {
  // type your code here
  let newString = ''
    for (var i = str.length - 1; i >= 0; i--) 

    newString += str[i]

    return newString;
    }

if (require.main === module) {
  // add your own tests in here: like stringified numbers
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: '9560218'");
  console.log("=>", reverseString("8120659"))

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// for given str
  // one-by-one remove last character ex: cat - t, then a, then c
  // place each character into new string

      // if (typeof str === integer){
    //   str.Stringify
    // }else{}

  //  return new str so that the argument str is now backwards

// And a written explanation of your solution

// I want a new empty string to hold a spot for all the characters coming from the argument that's passed. Then I would like to take that string apart starting from the back using a for loop (with the appropriate arguments to handle a reversal) starting from the back of the string passed: "i = str.length - 1" gets the loop started from the final spot in the string each time. "i >= 0" is the condition to keep the loop running. After final element (i = 0) the for loop shuts off. I am decrementing through the elements minus 1 at a time: "i--". I would like to figure out how to handle reversing numbers if they are passed without quotations.
