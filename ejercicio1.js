function sum(num1, num2) {
  let suma = num1 + num2;
  const p = new Promise((resolve, reject) => {
    if (num1 + num2 == suma) {
      resolve(suma);
    }
  });

  p.then((res) => {
    console.log("El resultado es " + res);
  }).catch((error) => {
    console.log("La  respuesta esta mal, es " + error);
  });
}

let a = 5;
let b = 12;

console.log(sum(a, b));
