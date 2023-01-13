

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
      resolve(datos);
    });

    promesa.then((res) => {
      console.log(res);
    });
  }, 2000);

  return datos;
}


function getUserData(id) {
  return new Promise((resolve, reject) => {
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
}



getUserData(4566)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
