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

  return datos;
}

function getUser() {
  return  new Promise((resolve, reject) => {
    resolve(getData());
  });

  promesa.then((res) => {
    console.log(res);
  });
}

getUser().then(res=>{
  console.log(res)
})
