function sum(num1, num2) {
  return new Promise((resolve, reject) => {
    resolve(num1 + num2);
  });
}

sum(5, 7).then((res) => {
  console.log("El resultado es " + res);
});
