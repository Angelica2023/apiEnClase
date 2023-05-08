import usuarios from "./usuarios.json" assert { type: "json" };

 // console.log (usuarios)

  const promesaPorCumplir = new Promise((resolve, reject) => {
  
    setTimeout(() => {

 if (usuarios.length > 0) {
        // El arreglo no está vacío
         // console.log (usuarios)
        resolve(
          console.log ("Los usuarios son:",usuarios));
      } else {
        // El arreglo está vacío
       reject("ERROR al buscar usuarios");
      }
    }, 4000);
  });
  
  promesaPorCumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));

    //Busqueda en API

    async function findAllCharacters() {

      const datosEncontrados = await  fetch(
        "https://rickandmortyapi.com/api/character"
      );
    
       const datosDevueltos = await  datosEncontrados.json()
    
      return  console.log(datosDevueltos);
    }
    
    findAllCharacters()

    async function findAllCharacters17() {

      const datosEncontrado17 = await  fetch(
        "https://rickandmortyapi.com/api/character/17"
      );
    
       const datos17 = await  datosEncontrado17.json()
    
      return  console.log(datos17);
      
    }
    findAllCharacters17()