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
  main();
}
function choice12() {
  operation = prompt("1. + \n 2. - \n 3. * \n 4. /");
}

function isValid(temp) {
  if (isNaN(temp)) {
    alert("The input you have entered is not a number please enter a number");
  } else {
    alert(temp);
  }
}

function main() {
  // Mathematical operations
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
    //If input no are invalid we check by isValid function
    let temp;
    //If input no is valid
    if (operation == 1) {
      temp = no1 + no2;
      console.log(temp + " type of temp " + typeof temp);
      isValid(temp);
    } else if (operation == 2) {
      temp = no1 - no2;
      isValid(temp);
    } else if (operation == 3) {
      temp = no1 * no2;
      isValid(temp);
    } else if (operation == 4) {
      temp = no1 / no2;
      isValid(temp);
    } else {
      alert("Please enter no 1 to 4 to reflect your choice");
      choice1();
    }
    choice1();
  }

  //Area
  else if (op1 == 2) {
    let area = prompt("1.Circle \n 2. Square");
    console.log("Area: " + area);
    let side;
    let temp2;
    if (area == 1) {
      side = prompt("Enter Radius");
      temp2 = side * side * 3.14;
      isValid(temp2);
    } else if (area == 2) {
      side = prompt("Enter Side");
      temp2 = side * side;
      isValid(temp2);
    } else {
      //Build Logic
      alert("Enter a no between 1 and 2");
    }
    choice1();
  }

  //Functions
  else if (op1 == 3) {
    let func = prompt("1.Nth prime no \n 2. Nth Fibonaachi no ");
    console.log("func: " + func);
    if (func == 1) {
      let no = prompt("Enter the no");
      alert(findPrime(no));
    } else if (func == 2) {
      let no = prompt("Enter the no");
      alert(fib(no));
    } else {
      alert("Please enter valid choice amonst 1 and 2");
    }
    choice1();
  }

  //Expression Solver
  else if (op1 == 4) {
    //Logic for expression solver
    let str = prompt(
      "Enter the expression you want to evaluate in the form \n 2+(3/4)-5+6/7 (This is a sample input)"
    );
    let ans = eval(str);

    //How to handle faulty input in this case??

    alert(ans);
    choice1();
  }
  //Exception
  else {
    alert("Please enter no 1 to 4 to reflect your choice");
    choice1();
  }
}

choice1();
console.log(op1);
