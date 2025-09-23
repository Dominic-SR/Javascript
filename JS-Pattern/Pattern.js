// Utility function
function print(title, callback) {
  console.log("\n================ " + title + " ================");
  callback();
}

// -------------------- STAR PATTERNS --------------------

// 1. Square
print("Square Pattern", () => {
  let n = 5;
  for (let i = 0; i < n; i++) console.log("* ".repeat(n));
});

// 2. Right Triangle
print("Right Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log("* ".repeat(i));
});

// 3. Inverted Right Triangle
print("Inverted Right Triangle", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) console.log("* ".repeat(i));
});

// 4. Left Triangle
print("Left Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 5. Pyramid
print("Pyramid", () => {
  let n = 5;
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 6. Inverted Pyramid
print("Inverted Pyramid", () => {
  let n = 5;
  for (let i = n; i >= 1; i--)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 7. Diamond
print("Diamond", () => {
  let n = 5;
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  for (let i = n - 1; i >= 1; i--)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 8. Hollow Square
print("Hollow Square", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += (i === 0 || i === n - 1 || j === 0 || j === n - 1) ? "* " : "  ";
    }
    console.log(row);
  }
});

// 9. Hollow Diamond
print("Hollow Diamond", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hollow = i === 1 ? "*" : "*" + " ".repeat(2 * i - 3) + "*";
    console.log(spaces + hollow);
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let hollow = i === 1 ? "*" : "*" + " ".repeat(2 * i - 3) + "*";
    console.log(spaces + hollow);
  }
});

// 10. Sandglass
print("Sandglass", () => {
  let n = 5;
  for (let i = n; i >= 1; i--)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  for (let i = 2; i <= n; i++)
    console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 11. Right Pascal’s Triangle
print("Right Pascal’s Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log("* ".repeat(i));
  for (let i = n - 1; i >= 1; i--) console.log("* ".repeat(i));
});

// 12. Left Pascal’s Triangle
print("Left Pascal’s Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
  for (let i = n - 1; i >= 1; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 13. X Pattern
print("X Pattern", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += (i === j || i + j === n - 1) ? "* " : "  ";
    console.log(row);
  }
});

// 14. Plus Pattern
print("Plus Pattern", () => {
  let n = 5, mid = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += (i === mid || j === mid) ? "* " : "  ";
    console.log(row);
  }
});

// 15. Cross (Diagonal) Pattern
print("Cross Pattern", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += (i === j) ? "* " : "  ";
    console.log(row);
  }
});

// -------------------- NUMBER PATTERNS --------------------

// 16. Number Triangle
print("Number Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log([...Array(i)].map((_, j) => j + 1).join(" "));
});

// 17. Inverted Number Triangle
print("Inverted Number Triangle", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) console.log([...Array(i)].map((_, j) => j + 1).join(" "));
});

// 18. Floyd’s Triangle
print("Floyd’s Triangle", () => {
  let n = 5, num = 1;
  for (let i = 1; i <= n; i++) {
    console.log([...Array(i)].map(() => num++).join(" "));
  }
});

// 19. Pascal’s Triangle
print("Pascal’s Triangle", () => {
  let n = 6;
  for (let i = 0; i < n; i++) {
    let num = 1, row = "";
    for (let j = 0; j <= i; j++) {
      row += num + " ";
      num = (num * (i - j)) / (j + 1);
    }
    console.log(row);
  }
});

// 20. Palindrome Number Pyramid
print("Palindrome Number Pyramid", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) row += j;
    for (let j = 2; j <= i; j++) row += j;
    console.log(row);
  }
});

// -------------------- ALPHABET PATTERNS --------------------

// 21. Alphabet Triangle
print("Alphabet Triangle", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log([...Array(i + 1)].map((_, j) => String.fromCharCode(65 + j)).join(" "));
  }
});

// 22. Inverted Alphabet Triangle
print("Inverted Alphabet Triangle", () => {
  let n = 5;
  for (let i = n; i > 0; i--) {
    console.log([...Array(i)].map((_, j) => String.fromCharCode(65 + j)).join(" "));
  }
});

// 23. Alphabet Pyramid
print("Alphabet Pyramid", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i) + [...Array(i + 1)].map((_, j) => String.fromCharCode(65 + j)).join(" "));
  }
});

// 24. Alphabet Diamond
print("Alphabet Diamond", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i) + [...Array(i + 1)].map((_, j) => String.fromCharCode(65 + j)).join(" "));
  }
  for (let i = n - 2; i >= 0; i--) {
    console.log(" ".repeat(n - i) + [...Array(i + 1)].map((_, j) => String.fromCharCode(65 + j)).join(" "));
  }
});

// 25. Repeating Alphabet Square
print("Repeating Alphabet Square", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log([...Array(n)].map((_, j) => String.fromCharCode(65 + i)).join(" "));
  }
});

// -------------------- (More patterns continue up to 50) --------------------


// -------------------- MIXED & SPECIAL PATTERNS --------------------

// 26. Binary Triangle
print("Binary Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += (i + j) % 2 + " ";
    console.log(row);
  }
});

// 27. Alternating Binary Triangle
print("Alternating Binary Triangle", () => {
  let n = 5, bit = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += bit + " ";
      bit = 1 - bit;
    }
    console.log(row);
  }
});

// 28. Palindrome Triangle (Stars)
print("Star Palindrome Triangle", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) row += "*";
    for (let j = 2; j <= i; j++) row += "*";
    console.log(row);
  }
});

// 29. Hollow Pyramid
print("Hollow Pyramid", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += (j === 1 || j === 2 * i - 1 || i === n) ? "*" : " ";
    }
    console.log(row);
  }
});

// 30. Hollow Inverted Pyramid
print("Hollow Inverted Pyramid", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += (j === 1 || j === 2 * i - 1 || i === n) ? "*" : " ";
    }
    console.log(row);
  }
});

// 31. Butterfly Pattern
print("Butterfly Pattern", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i) + " ".repeat(2 * (n - i)) + "* ".repeat(i));
  }
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i) + " ".repeat(2 * (n - i)) + "* ".repeat(i));
  }
});

// 32. Zig-Zag Pattern
print("Zig-Zag Pattern", () => {
  let n = 9;
  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) row += "*";
      else row += " ";
    }
    console.log(row);
  }
});

// 33. Pyramid of Numbers
print("Number Pyramid", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j + " ";
    console.log(row);
  }
});

// 34. Palindrome Number Pyramid (Centered)
print("Centered Palindrome Number Pyramid", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = i; j >= 1; j--) row += j;
    for (let j = 2; j <= i; j++) row += j;
    console.log(row);
  }
});

// 35. Diamond of Numbers
print("Diamond of Numbers", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j + " ";
    console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j + " ";
    console.log(row);
  }
});

// 36. Alphabet Palindrome Pyramid
print("Alphabet Palindrome Pyramid", () => {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = " ".repeat(n - i);
    for (let j = i; j >= 0; j--) row += String.fromCharCode(65 + j);
    for (let j = 1; j <= i; j++) row += String.fromCharCode(65 + j);
    console.log(row);
  }
});

// 37. Hollow Diamond with Numbers
print("Hollow Diamond with Numbers", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += (j === 1 || j === 2 * i - 1) ? i : " ";
    }
    console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += (j === 1 || j === 2 * i - 1) ? i : " ";
    }
    console.log(row);
  }
});

// 38. Snake Matrix
print("Snake Matrix", () => {
  let n = 5, num = 1;
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) row.push(num++);
    if (i % 2 === 1) row.reverse();
    console.log(row.join(" "));
  }
});

// 39. Spiral Matrix (n=4)
print("Spiral Matrix", () => {
  let n = 4, mat = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0, bottom = n - 1, left = 0, right = n - 1, num = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) mat[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) mat[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) mat[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) mat[i][left] = num++;
    left++;
  }
  mat.forEach(r => console.log(r.join(" ")));
});

// 40. Checkerboard
print("Checkerboard", () => {
  let n = 8;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += (i + j) % 2 === 0 ? "* " : "  ";
    console.log(row);
  }
});

// 41. Hollow Square with Diagonals
print("Hollow Square with Diagonals", () => {
  let n = 7;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1 || i === j || i + j === n - 1) row += "* ";
      else row += "  ";
    }
    console.log(row);
  }
});

// 42. Hourglass
print("Hourglass", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
  for (let i = 2; i <= n; i++) console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 43. Hollow Hourglass
print("Hollow Hourglass", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
      row += (j === 1 || j === i || i === n) ? "* " : "  ";
    }
    console.log(row);
  }
  for (let i = 2; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) {
      row += (j === 1 || j === i || i === n) ? "* " : "  ";
    }
    console.log(row);
  }
});

// 44. Pyramid with Same Numbers
print("Pyramid with Same Numbers", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + (i + " ").repeat(i));
});

// 45. Number Diamond
print("Number Diamond", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + (i + " ").repeat(i));
  for (let i = n - 1; i >= 1; i--) console.log(" ".repeat(n - i) + (i + " ").repeat(i));
});

// 46. Alphabet Rectangle
print("Alphabet Rectangle", () => {
  let rows = 4, cols = 6, ch = 65;
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += String.fromCharCode(ch) + " ";
      ch++;
      if (ch > 90) ch = 65;
    }
    console.log(row);
  }
});

// 47. Incrementing Numbers Triangle
print("Incrementing Numbers Triangle", () => {
  let n = 5, count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += count++ + " ";
    console.log(row);
  }
});

// 48. Reverse Pyramid of Stars
print("Reverse Pyramid", () => {
  let n = 5;
  for (let i = n; i >= 1; i--) console.log(" ".repeat(n - i) + "* ".repeat(i));
});

// 49. Centered Star Diamond
print("Centered Star Diamond", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  for (let i = n - 1; i >= 1; i--) console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
});

// 50. Double Hill Pattern
print("Double Hill Pattern", () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    row += "*".repeat(i);
    row += " ".repeat(2 * (n - i));
    row += "*".repeat(i);
    console.log(row);
  }
});
