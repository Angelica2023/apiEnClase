import usuarios from "./usuarios.json" assert { type: "json" };

 // console.log (usuarios)

  const promesaPorCumplir = new Promise((resolve, reject) => {
  
    setTimeout(() => {

//var allData = usuarios.slice(); // Copia todos los elementos del arreglo original

  //  console.log(allData); // Muestra el arreglo completo en la consola

    if (usuarios.length > 0) {
        // El arreglo no está vacío
        resolve("Los usuarios son:",usuarios);
      } else {
        // El arreglo está vacío
       reject("ERROR al buscar usuarios");
      }
    }, 4000);
  });
  
  promesaPorCumplir
    .then((respuesta) => console.log(usuarios))
    .catch((error) => console.log(error));