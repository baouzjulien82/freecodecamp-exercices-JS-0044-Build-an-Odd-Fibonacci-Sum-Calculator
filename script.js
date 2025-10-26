// Version initiale

function sumFibs(num) {
  let a = 0;
  let b = 1;
  let sum = 0;
  let temp;

  while (b <= num) {
    if (b % 2 !== 0) {  // si le nombre est impair
      sum += b;
    }

    // avancer dans la suite de Fibonacci
    temp = a + b; // var temp obligatoire afin de ne pas perdre l'ancienne valeur de a.
    a = b;
    b = temp;
  }

  return sum;
}

console.log(sumFibs(10));   // ➜ 10 (1 + 1 + 3 + 5)
console.log(sumFibs(1000)); // ➜ 1785
console.log(sumFibs(4000000)); // ➜ 4613732


// Version améliorée

function sumFibs(num) {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b; // ajoute seulement les impairs
    }
    [a, b] = [b, a + b]; // calcule le prochain Fibonacci
  }

  return sum;
}

console.log(sumFibs(10));   // ➜ 10 (1 + 1 + 3 + 5)
console.log(sumFibs(1000)); // ➜ 1785
console.log(sumFibs(4000000)); // ➜ 4613732
