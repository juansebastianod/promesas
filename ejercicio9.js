function getData() {
  let datos = [
    {
      origen: "calle 4 av 5 ceci",
      destino: "calle 8 av 12 nidia",
      navegacion: "derecho 2 cuadras voltea a la izquierda y llega",
    },
    {
      origen: "calle 4 av 5 rodeo",
      destino: "calle 8 av 12 7 de de agosto",
      navegacion: "derecho 12 cuadras voltea a la izquierda y llega",
    },
    {
      origen: "calle 4 av 5 ciudad jardin",
      destino: "calle 8 av 12 zulima",
      navegacion: "derecho 3 cuadras voltea a la izquierda y llega",
    },
  ];

  return datos;
}

//los parametros son String que dicen la calle av y barrio ejemplo calle 4 av 5
function getDirections(origen, destino) {
  return new Promise((resolve, reject) => {
    getData().forEach((element) => {
      if (element.origen === origen && element.destino === destino) {
        resolve(element.navegacion);
      } else {
        reject("no existe  algunas de las direcicones");
      }
    });
  });
}

getDirections("calle 4 av 5 ceci", "calle 8 av 12 nidia")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
