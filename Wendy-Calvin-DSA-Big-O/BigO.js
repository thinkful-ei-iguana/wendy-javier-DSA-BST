// function TOH(n, source, dest, via) {
//   if (n >= 1) {
//     // Move a tower of n-1 to the buffer peg, using the destination peg.
//     TOH(n - 1, source, via, dest);

//     // Move the remaining disk to the destination peg.
//     console.log("Move disk from Tower ", source, " to Tower ", dest);

//     // Move the tower of `n-1` from the `buffer peg` to the `destination peg` using the `source peg`.
//     TOH(n - 1, via, dest, source);
//   }

//   return;
// }

// TOH(3, "A", "C", "B");

//Drill 1 iterative, counting sheep

function sheepCounter(n) {
  for (let i = n; n >= 0; i--) {
    if (i > 0) {
      console.log(`${i}: Another sheep jumps over the fence`);
    } else {
      console.log("All sheep jumped over the fence.");
      return;
    }
  }
}
//O(n)
sheepCounter(3);

function powerCalc(base, exp) {
  return Math.pow(base, exp);
}
//O(1)

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
  return;
}
//O(n)
reverseString("hello");

function triangulateMe(n) {}
//O(n)

function stringSplitter(str) {
  let newStr = str.split("/");
  return newStr;
}
//O(n)

function fibo(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

//O(log(n))

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = n-1; i >= 1; i--) {
    n = n * i;
  }
  return n;
}
