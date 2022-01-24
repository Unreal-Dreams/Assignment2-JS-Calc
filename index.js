//alert, prompt, confirm
//1.add,sub,mul,div
//2.area square, circle, nth prime
//3.expression solver

//plan main menu 3 options 1,2,3
//1. 4 options
//2. 3 options
//3. enter expression

//we have to use promt to give choices

let op1;
let operation;

//Prime Function
const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};

//Fibonaachi
function fib(n) {
  let [a, b] = [0, 1];
  while (n-- > 0) {
    [a, b] = [b, a + b];
  }
  return b;
}

// or
function fib(n) {
  let arr = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    // arr.push(arr[i-1] + arr[i-2])
  }

  return arr[n];
  // return arr...for list of all values!!!
}
function choice1() {
  op1 = prompt(
    "1. Mathematical Operations \n 2. Area of shapes \n 3. Functions \n 4. expression solver"
  );
}
function choice12() {
  operation = prompt("1. + \n 2. - \n 3. * \n 4. /");
}
choice1();
console.log(op1);
if (op1 == 1) {
  choice12();
  console.log("operation " + operation);
  let n1, n2;
  //Figure out the logic so that no are not taken input in case of invalid choice
  n1 = prompt("Enter the first no");
  n2 = prompt("Enter the second no");
  console.log(typeof n1 + " " + typeof n2);
  let no1, no2;
  no1 = parseInt(n1);
  no2 = parseInt(n2);
  console.log(typeof no1 + " " + typeof no2);
  //If input no are invalid

  //If input no is valid
  if (operation == 1) {
    alert(no1 + no2);
  } else if (operation == 2) {
    alert(no1 - no2);
  } else if (operation == 3) {
    alert(no1 * no2);
  } else if (operation == 4) {
    alert(no1 / no2);
  } else {
    alert("Please enter no 1 to 4 to reflect your choice");
    choice12();
  }
  choice1();
} else if (op1 == 2) {
  let area = prompt("1.Circle \n 2. Square");
  let side;
  if (area == 1) {
    side = prompt("Enter Radius");
    alert(side * side * 3.14);
  } else if (area == 2) {
    side = prompt("Enter Side");
    alert(side * side);
  } else {
    //Build Logic
  }
  choice1();
} else if (op1 == 3) {
  let func = prompt("1.Nth prime no \n 2. Nth Fibonaachi no ");
  let no = prompt("Enter the no");
  if (func == 1) {
    alert(findPrime(no));
  } else if (func == 2) {
    alert(fib(no));
  } else {
    alert("Please enter valid choice amonst 1 and 2");
  }
  choice1();
} else if (op1 == 4) {
} else {
  alert("Please enter no 1 to 4 to reflect your choice");
  choice1();
}
