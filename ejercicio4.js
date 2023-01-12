/*Crea una función llamada login que tome un nombre de usuario y una contraseña 
como argumentos, y devuelva una promesa que resuelva con true si las credenciales 
son válidas, o false en caso contrario.*/

function login(nombre, password) {
  let verificar;
  let verficar = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
  };

  const p = new Promise((resolve, reject) => {
    if (verficar.nombre.test(nombre) && verficar.password.test(password)) {
      verficar = true;
      resolve(verficar);
    } else {
      verficar = false;
      reject(verficar);
    }
  });

  p.then((res) => {
    console.log("las credenciales son " + res);
  }).catch((error) => {
    console.log("la credenciales se rechazaron " + error);
  });

  return p;
}

console.log(login("juan", "hello"));
