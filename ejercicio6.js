// Crea una función llamada uploadFile que tome un nombre de archivo y una
// promesa de File como argumentos, y devuelva una promesa que resuelva
// con una URL de
// descarga del archivo subido al servidor.

const direccion = "https://lineadecodigo.com/html/pagina-web-para-descargar-/";

function uploadFile(nombreFIle) {
  return new Promise((resolve, reject) => {
    resolve(`${direccion}${nombreFIle}`);
  });
}

uploadFile("archivo").then((res) => {
  console.log(res);
});
