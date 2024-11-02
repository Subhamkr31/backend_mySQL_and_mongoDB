// Here's a solution for the ArrayChallenge problem in JavaScript:

// Explanation: PROBLEM 1

// Calculate the Sum: Use reduce to sum all the elements.
// Double the Sum: Multiply the sum by 2 to get doubleSum.
// Loop Through Pairs: For each pair of elements in arr, calculate the product and check if it's greater than doubleSum.
// Return Result: If a product is greater than doubleSum, return "true". If no such pairs exist, return "false".


function ArrayChallenge(arr) {
    // Calculate the sum of all elements in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);

    // Calculate double the sum
    const doubleSum = 2 * sum;

    // Iterate through all pairs of numbers in the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Check if the product of any two numbers is greater than double the sum
            if (arr[i] * arr[j] > doubleSum) {
                return "true";
            }
        }
    }

    // If no pairs meet the condition, return false
    return "false";
}

// Test cases
console.log(ArrayChallenge([2, 5, 6, -6, 16, 2, 3, 6, 5, 3])); // Output: "true"
console.log(ArrayChallenge([1, 2, 2, 2, 4, 1]));              // Output: "false"
console.log(ArrayChallenge([1, 1, 2, 18, 3, 3, 32]));         // Output: "true"



// Explanation : PROBLEM 2

// To solve this challenge in JavaScript, let's break it down into steps:

//     Run-Length Encoding: Compress the string by counting consecutive characters.
//     Concatenate with Challenge Token: Append the final output to the provided token.
//     Replace Every Third Character with 'X': Modify the resulting string according to the instructions.

// Here's the code that achieves this:



//     Run-Length Encoding:
//         Loop through the string, counting consecutive identical characters.
//         When a different character is encountered, add the count and the character to encoded and reset the count.

//     Concatenate with Token:
//         Append the given challenge token (Ipgte59d4) to the end of the encoded string.

//     Replace Every Third Character:
//         Convert the string to an array and replace every third character with 'X' using map.
//         Join the modified array back into a string.

// Example Walkthrough

// For input "aabbcde":

//     Run-Length Encoding: "aabbcde" becomes "2a2b1c1d1e".
//     Concatenate with Token: "2a2b1c1d1eIpgte59d4".
//     Replace Every Third Character: Final output becomes "28Xb1X1dXe1XgtX59X4".

function stringChallenge(str) {
    // Step 1: Run-Length Encoding
    let encoded = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            encoded += count + str[i - 1];
            count = 1;
        }
    }

    // Step 2: Concatenate with Challenge Token
    const challengeToken = "Ipgte59d4";
    let finalOutput = encoded + challengeToken;

    // Step 3: Replace Every Third Character with 'X'
    let modifiedOutput = finalOutput
        .split('')
        .map((char, index) => (index % 3 === 2 ? 'X' : char))
        .join('');

    return modifiedOutput;
}

// Test case
console.log(stringChallenge("aabbcde")); // Output: "28Xb1X1dXe1XgtX59X4"







// Explanation :PROBLEM 3

// To determine if a portion of str1 characters can be rearranged to match str2, we can use the following approach:

//     Character Frequency Count: Count how often each character appears in both str1 and str2.
//     Comparison: Check if str1 contains at least as many of each character as required by str2.

// Here’s how you can implement this in JavaScript:

//     Frequency Count for str1:
//         Loop through str1 and store the frequency of each character in count1.

//     Check str2 Characters Against count1:
//         For each character in str2, check if it exists in count1 with a non-zero count.
//         If a character is missing or its count is zero, return "false".
//         If a character is found, decrement its count in count1.

//     Return "true":
//         If all characters in str2 are found in str1 with sufficient counts, return "true".

// Example Walkthrough

//     For input "rkqodlw" and "world":
//         count1 for "rkqodlw" is { r: 1, k: 1, q: 1, o: 1, d: 1, l: 1, w: 1 }.
//         Checking "world" against count1 shows each character has sufficient frequency.
//         Output: "true".

//     For input "h311ko" and "hello":
//         count1 for "h311ko" is { h: 1, 3: 2, 1: 2, k: 1, o: 1 }.
//         "e" is missing in count1, so it returns "false".

// Final Output

// This function will output:

//     "true" if str2 can be formed from a portion of str1.
//     "false" otherwise

function StringChallenge(str1, str2) {
    // Create a frequency count for characters in str1
    const count1 = {};
    for (let char of str1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    // Check if str2's characters can be matched by the frequency in str1
    for (let char of str2) {
        if (!count1[char] || count1[char] <= 0) {
            return "false"; // If a character is missing or insufficient, return false
        }
        count1[char]--; // Decrease count for matched character
    }

    return "true"; // If all characters in str2 are accounted for, return true
}

// Test cases
console.log(StringChallenge("rkqodlw", "world"));  // Output: "true"
console.log(StringChallenge("cdore", "coder"));    // Output: "true"
console.log(StringChallenge("h311ko", "hello"));   // Output: "false"



// Explanation : 4

// Here’s an alternative approach that breaks down the solution using simpler steps without relying on regular expressions. This approach involves:

//     Identifying Triple Sequences in num1 by iterating through the digits.
//     Searching for Double Sequences in num2 for each identified triple digit.

// Here’s the code:


//     Identifying Triples in num1:
//         We loop through num1 and check each group of three consecutive digits.
//         If all three are the same, add that digit to the tripleDigits set (to avoid duplicates).

//     Checking for Doubles in num2:
//         For each digit in tripleDigits, loop through num2 and look for two consecutive occurrences of that digit.
//         If found, return 1, indicating a matching triple and double.

//     Return 0 if No Match Found:
//         If no triple-double pair is found after iterating through num1 and num2, return 0.

// Example Walkthrough

//     Input: num1 = 465555, num2 = 5579
//         In num1, 555 is a triple, so tripleDigits is { '5' }.
//         Checking num2, we find 55, a double of 5.
//         Output: 1

//     Input: num1 = 67844, num2 = 66237
//         No triple digit in num1, so tripleDigits remains empty.
//         Output: 0
 
function SearchingChallenge(num1, num2) {
    // Convert numbers to strings for easier manipulation
    num1 = num1.toString();
    num2 = num2.toString();

    // Step 1: Find triples in num1
    let tripleDigits = new Set();
    for (let i = 0; i < num1.length - 2; i++) {
        if (num1[i] === num1[i + 1] && num1[i] === num1[i + 2]) {
            tripleDigits.add(num1[i]);  // Add the digit with a triple occurrence
        }
    }

    // Step 2: Check for a double of any triple digit in num2
    for (let digit of tripleDigits) {
        for (let j = 0; j < num2.length - 1; j++) {
            if (num2[j] === digit && num2[j] === num2[j + 1]) {
                return 1;  // Found a matching double for a triple digit
            }
        }
    }

    return 0;  // No matching triple-double found
}

// Test cases
console.log(SearchingChallenge(465555, 5579));  // Output: 1
console.log(SearchingChallenge(67844, 66237));  // Output: 0





// To solve the "Array Challenge" for counting the total number of duplicate entries in an array, we can follow these steps:

//     Create a frequency map to count occurrences of each number in the array.
//     Calculate the total duplicates by checking how many times each number appears more than once.
//     Return the total number of duplicates.

// Here's how you can implement this in JavaScript:
 

function ArrayChallenge(arr) {
    const frequencyMap = {};
    
    // Count occurrences of each number
    for (const num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    
    let totalDuplicates = 0;

    // Calculate total duplicates
    for (const count of Object.values(frequencyMap)) {
        if (count > 1) {
            totalDuplicates += count - 1; // Add the number of duplicates
        }
    }

    return totalDuplicates;
}

// Keep this function call here
console.log(ArrayChallenge([0, -2, -2, 5, 5, 5])); // Output: 3
console.log(ArrayChallenge([100, 2, 101, 4])); // Output: 0
console.log(ArrayChallenge([1, 2, 2, 2, 3])); // Output: 2




// SQL 


// SELECT COUNT(*)
// FROM maintable_JBMWQ
// WHERE FirstName LIKE '%e%' AND CHAR_LENGTH(LastName) > 5;