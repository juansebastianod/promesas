// let getData = new Promise((resolve, reject) => {

//   let datos = {
//     name: "juan",
//     age: "21",
//   };

//   setTimeout(() => {

//   }, 2000);
// });

function getData() {
  let datos = [
    {
      name: "juan",
      age: 21,
      id: 5432,
    },
    {
      name: "sebastina",
      age: 25,
      id: 456,
    },
    {
      name: "ovallos",
      age: 5,
      id: 4566,
    },
  ];

  let promesa;

  setTimeout(() => {
    promesa = new Promise((resolve, reject) => {
      let dato2 = datos.filter((datos) => {
        if (datos.age > 18) {
          return datos;
        }
      });
      resolve(dato2);
    });

    promesa.then((res) => {
      console.log(res);
    });
  }, 2000);

  console.log("pruebas");

  return datos;
}

function getUserData(id) {
  let promesa = new Promise((resolve, reject) => {
    let objeto;

    getData().forEach((elemento) => {
      if (elemento.id === id) {
        objeto = elemento;
      }
    });

    if (objeto != null) {
      resolve(objeto);
    } else {
      reject("No existe");
    }
  });

  promesa
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

console.log(getUserData(45667));
