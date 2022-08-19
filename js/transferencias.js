//Variable que contiene el saldo inicial
let saldoCajaAhorro = 150000;
//Array que contiene las cuentas habilitadas para recibir transferencias
const cuentasHabilitadas = [];
//Funcion que carga las cuentas habilitadas para recibir transferencias
const cargarCuentasHabilitadas = (arr) => {
  arr.push({
    id: "01",
    titular: "Gómez, Sandra",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "4069-5689756/5",
    entidad: "Banco Galicia"
  });
  arr.push({
    id: "02",
    titular: "Suarez, Analía",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "5879-789700/4",
    entidad: "Banco Hipotecario"
  });
  arr.push({
    id: "03",
    titular: "Castro, Cintia",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "4565-991626/8",
    entidad: "Banco Provincia"
  });
  arr.push({
    id: "04",
    titular: "Alonso, Juan Alberto",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "2356-123055/5",
    entidad: "Banco Santander"
  });
  arr.push({
    id: "05",
    titular: "Villareal, Susana",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "4566-978600/4",
    entidad: "Banco Galicia"
  });
  arr.push({
    id: "06", 
    titular: "Odello, Alma",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "4566-462347/1",
    entidad: "Banco Nación"
  });
  arr.push({
    id: "07",
    titular: "López, Susana",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "5765-274416/7",
    entidad: "Banco Hipotecario"
  });
  arr.push({
    id: "08",
    titular: "Szulz, Alffedo",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "8765-602337/9",
    entidad: "Banco Provincia"
  });
  arr.push({
    id: "09",
    titular: "Sandoval, Pamela",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "3575-389726/4",
    entidad: "Banco Ciudad"
  });
  arr.push({
    id: "10",
    titular: "Gaetani, Romina",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "6525-753493/4",
    entidad: "Banco Roela"
  });
}
//Llamada a la funcion que carga las cuentas en el array de cuentas habilitadas
cargarCuentasHabilitadas(cuentasHabilitadas);
//Funcion que inyecta la tabla cuentas habilitadas a recibir transferencias en el html
function mostrarCuentas(array) {
  //Código que crea el elemento tabla y le asigna sus clases
  let table = document.createElement("table");
  table.className = "table table-hover";
  //Código que crea la cabeza de la tabla
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = `
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Titular</th>
            <th scope="col">Cuenta</th>
            <th scope="col">Moneda</th>
            <th scope="col">Número</th>
            <th scope="col">Entidad</th>
        </tr>
        </thead>
    `;
  //Codigo que crea el cuerpo de la tabla y agrega el divisor entre cabeza y cuerpo
  let tableBody = document.createElement("tbody");
  tableBody.className = "table-group-divider";
  //Codigo que recorre el array de cuentas creado anteriormente y asigna cada elemento a su culumna
  for (const cuenta of array) {
    console.log()
    tableBody.innerHTML += `
        <tr>
            <td>${cuenta.id}</td>
            <td>${cuenta.titular}</td>
            <td>${cuenta.tipo}</td>
            <td>${cuenta.moneda}</td>
            <td>${cuenta.cuenta}</td>
            <td>${cuenta.entidad}</td>
        </tr>
        `;
  }
  //Codigo que agrega la cabeza y el cuerpo a la tabla creada anteriormente
  table.append(tableHead);
  table.append(tableBody);
  //Codigo que asigna a un padre la tabla creada anteriormente
  let tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
}
//Llamada a la funcion que inyecta al html la tabla con las cuentas habilitadas
mostrarCuentas(cuentasHabilitadas);
//Codigo que captura el campo donde el usuario debe ingresar la cantidad de dinero que desea transferir
const inputTransferencia = document.getElementById("transferencia-input");

const capturarValor =  document.getElementById("transferencia-submit");

let [a, b, c, d, f, g, h, i, j, k] = cuentasHabilitadas;

capturarValor.onclick = () => {
  if(inputTransferencia.value == "01"){
    //Codigo para cambiar el subtitulo del simulador
    const text = document.querySelector(".text");
    text.innerHTML = "<p class='text'> Ingrese el monto que desea transferir a " + a.titular + ": <input type= 'number' class= 'input' id= 'transferencia-input'> </p>";

     
  }
  else if(inputTransferencia.value == "02"){
    console.log(b.titular);
  }
  else if(inputTransferencia.value == "03"){
    console.log(03);
  }
  else if(inputTransferencia.value == "04"){
    console.log(04);
  }
  else if(inputTransferencia.value == "05"){
    console.log(05);
  }
  else if(inputTransferencia.value == "06"){
    console.log(06);
  }
  else if(inputTransferencia.value == "07"){
    console.log(07);
  }
  else if(inputTransferencia.value == "08"){
    console.log(08);
  }
  else if(inputTransferencia.value == "09"){
    console.log(09);
  }
  else if(inputTransferencia.value == "10"){
    console.log(10);
  }
  else
  {
    return console.log(0)
  }
}



