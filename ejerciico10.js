// Crea una función llamada getUserData que tome un ID
//  de usuario como argumento y devuelva una promesa que resuelva
//  con un objeto de datos del usuario con ese ID (puedes
// simular la respuesta de una API externa usando setTimeout).

function getData() {
  let datos = [
    {
      name: "juan",
      age: 21,
      id: 5432,
      fechaNacimiento: "1986/09/26",
    },
    {
      name: "sebastina",
      age: 25,
      id: 456,
      fechaNacimiento: "1989/09/26",
    },
    {
      name: "ovallos",
      age: 5,
      id: 4566,
      fechaNacimiento: "2001/03/26",
    },
  ];
  return datos;
}

function getUserData(id) {
  setTimeout(() => {
    let promesa = new Promise((resolve, reject) => {
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

    promesa.then((res) => {
      console.log(res);
    });
  }, 2000);
}

getUserData(5432);

//edad
function getUserAge(dateString) {

    
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  return edad;
}

console.log(getUserAge("1986/09/26"));
