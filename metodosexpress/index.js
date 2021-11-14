let express = require("express");
let app = express();
app.listen(3001);

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post("/persona", function(request, response) {
    // console.log(request)
	let variablenombre = request.body.nombre;
	let variableedad = request.body.edad;
	let variableorigen = request.body.origen;
	response.send({nombre: variablenombre, edad: variableedad, origen: variableorigen});
});

app.put("/persona", function(request, response) {
    // console.log(request)
	let variablenombre = request.body.nombre;
	let variableedad = request.body.edad;
	let variableorigen = request.body.origen;
	response.send({nombre: "_"+variablenombre, edad: "_"+variableedad, origen: "_"+variableorigen});
});

