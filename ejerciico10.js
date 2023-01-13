// Crea una función llamada getUserData que tome un ID
//  de usuario como argumento y devuelva una promesa que resuelva
//  con un objeto de datos del usuario con ese ID (puedes
// simular la respuesta de una API externa usando setTimeout).

function getData() {
  let datos = [];

  datos = [
    {
      name: "juan",
      age: 21,
      id: 5432,
      fechaNacimiento: "1986/09/26",
      ciudad: "medellin",
      correo: "juanovad@gmail.com",
    },
    {
      name: "sebastina",
      age: 25,
      id: 456,
      fechaNacimiento: "1989/09/26",
      ciudad: "bucaramanga",
      correo: "juanovad@gmail.com",
    },
    {
      name: "ovallos",
      age: 5,
      id: 4566,
      fechaNacimiento: "2001/03/26",
      ciudad: "cali",
      correo: "juanovad@gmail.com",
    },
  ];

  return datos;
}

function getUserInfo(id) {
  let objeto = {
    nombre: getUserData(id).name,
    correo: getUserData(id).correo,
    edad: getUserAge(getUserData(id).fechaNacimiento),
    ciudad: getUserData(id).ciudad,
  };

  return new Promise((resolve,reject)=>{

if(objeto==null){
    resolve(objeto)
  }else{
reject("no existe el dato")

  }});

  
}

console.log(getUserInfo(4566));

function getUserData(id) {
  let objeto = {};
  const p = new Promise((resolve, reject) => {
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

  setTimeout(() => {
    p.then((res) => {
      res;
    }).catch((error) => {
      console.error(error);
    });
  });

  return objeto;
}

//edad
function getUserAge(dateString) {
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

  const p = new Promise((resolve, reject) => {
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    resolve(edad);
  });

  return edad;
}
