function getData() {
  let datos = [
    {
      city: "bucaramanga",
      weather: "nublado",
    },
    {
      city: "Cucuta",
      weather: "Soleado",
    },
    {
      city: "bogota",
      weather: "lluvioso",
    },
  ];

  return datos;
}

function getWeather(city) {
  return new Promise((resolve, reject) => {
    let clima = getData().find((elemento) => {
      if (elemento.city == city) {
        return elemento.weather;
      }
    });

    if (clima != null) {
      resolve(clima.weather);
    } else {
      reject("la ciudad esta mal escrita o no existe");
    }
  });
}

city = "bogota";

getWeather(city)
  .then((res) => {
    console.log(`el clima en ${city} es ${res}`);
  })
  .catch((error) => {
    console.error(error);
  });
