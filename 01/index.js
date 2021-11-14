/*1. Crea un array de personas. Cada objeto “persona” tendrá nombre, apellido y edad.
Crea una página HTML que haga un fetch al servidor. En el servidor crea una ruta
que reciba una petición GET que devuelva el array de personas. Muestra el
contenido del array en el HTML*/

let express = require("express");
let app = express();
let personas = require("./app.js");
app.listen(3001);
app.use(express.static("public"));

app.get("/personas", function (request, response) {
    //La petición get envía {personas} a la URL /personas.
    response.send({ personas });
    //Ahora, vamos al HTML a recoger los datos con un fetch("/personas"):
})

/*2. Crea una ruta POST que reciba una petición con un objeto persona con nombre,
apellido y edad. Añade ese objeto al array de personas.*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/personas", function (request, response) {
    console.log(request)
    let nombreVar = request.body.nombre;
    let apellidoVar = request.body.apellido;
    let edadVar = request.body.edad;
    //Creamos una variable que contenga el objeto al que queremos hacer un .push:
    let responseVar = { nombre: nombreVar, apellido: apellidoVar, edad: edadVar };
    //Metemos el .push a la nueva variable:
    personas.push(responseVar);
    //Enviamos finalmente la variable personas entre llaves, ya con el objeto añadido al array:
    response.send({ personas });
});

/*3. Crea una ruta PUT que reciba un objeto persona con nombre, apellido y edad.
Dentro del array personas, modifica el objeto que tenga el nombre que recibimos en
la petición.*/

app.put("/personas", function (request, response) {
    personas.forEach((persona) => {
        if (persona.nombre == request.body.nombre) {

            persona.nombre = request.body.nombre;
            persona.apellido = request.body.apellido;
            persona.edad = request.body.edad;
        }
    });
    response.send({ personas });
});

/*4. Crea una ruta DELETE que reciba un nombre de persona. Borra el objeto persona
del array que tenga el nombre que recibimos en la petición.*/

app.delete("/personas", function (request, response) {
    personas.forEach((persona) => {
        if (persona.nombre == request.body.nombre) {

            persona.nombre = request.body.nombre;
            persona.apellido = request.body.apellido;
            persona.edad = request.body.edad;
        }
    });
    response.send({ personas });
});
