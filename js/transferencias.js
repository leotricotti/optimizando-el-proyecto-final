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
  tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
}
//Llamada a la funcion que inyecta al html la tabla con las cuentas habilitadas
mostrarCuentas(cuentasHabilitadas);
//Codigo que captura el campo donde el usuario debe ingresar la cantidad de dinero que desea transferir
let inputTransferencia = document.getElementById("transferencia-input");
//Funcion que coinvierte un numero al formato de pesos argentinos
const transferir = () => inputTransferencia.value;

console.log(transferir());



//Funcion que 
const transferirDinero = (saldo, dinero) => saldo - dinero;
saldoCajaAhorro = transferirDinero(saldoCajaAhorro, datoANumero());
//Codigo que captura el boton que confirma la operacion
const capturarValor = document.getElementById("transferencia-submit");
//Operador que desestructura el array de objetos
const [a, b, c, d, f] = cuentasHabilitadas;
//Funcion que captura la cuenta seleccionada y devuelve un campo para ingresar el importe que se desea transferir
const seleccionarCuenta = (inputValue) =>{
  if(inputValue == "01"){
    //Codigo para cambiar el subtitulo del simulador y agrega el data del titular de la cuenta como medida de control
    const text = document.querySelector(".text");
    text.innerHTML = `<p class='text'> Ingrese el monto que desea transferir a ${a.titular} : <input type= 'number' class= 'input' id= 'transferencia-input'> </p>`;
    //Codigo que quita la tabla con las cuentas habilitadas
    tableContainer.innerHTML = "";
  }else if(inputValue == "02"){
    //Codigo para cambiar el subtitulo del simulador y agrega el data del titular de la cuenta como medida de control
    const text = document.querySelector(".text");
    text.innerHTML = `<p class='text'> Ingrese el monto que desea transferir a ${b.titular} : <input type= 'number' class= 'input' id= 'transferencia-input'> </p>`;
    //Codigo que quita la tabla con las cuentas habilitadas 
    tableContainer.innerHTML = "";
  }else if(inputValue == "03"){
    //Codigo para cambiar el subtitulo del simulador y agrega el data del titular de la cuenta como medida de control
    const text = document.querySelector(".text");
    text.innerHTML = `<p class='text'> Ingrese el monto que desea transferir a ${c.titular} : <input type= 'number' class= 'input' id= 'transferencia-input'> </p>`;
    //Codigo que quita la tabla con las cuentas habilitadas 
    tableContainer.innerHTML = "";
  }else if(inputValue == "04"){
    //Codigo para cambiar el subtitulo del simulador y agrega el data del titular de la cuenta como medida de control
    const text = document.querySelector(".text");
    text.innerHTML = `<p class='text'> Ingrese el monto que desea transferir a ${d.titular} : <input type= 'number' class= 'input' id= 'transferencia-input'> </p>`;
    //Codigo que quita la tabla con las cuentas habilitadas 
    tableContainer.innerHTML = "";
  }else if(inputValue == "05"){
    //Codigo para cambiar el subtitulo del simulador y agrega el data del titular de la cuenta como medida de control
    const text = document.querySelector(".text");
    text.innerHTML = `<p class='text'> Ingrese el monto que desea transferir a ${f.titular} : <input type= 'number' class= 'input' id= 'transferencia-input'> </p>`;
    //Codigo que quita la tabla con las cuentas habilitadas 
    tableContainer.innerHTML = "";
  }else{
    swal("Opcion invalida", "Vuelve a intetarlo!!", "error");
  }
}
// //Funcion que pide al usuario que confirme la operacion a realizar 
// const confirmar = () => {
//  Swal.fire({
//     text: `Desea transferir ${numeroADinero} a la cuenta seleccionada?`,
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     confirmButtonText: 'Confirmar',
//     cancelButtonText: 'Cancelar',
//     showClass: {
//       popup: 'animate__animated animate__bounceIn'
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else {

//     }
//   })
// }
//Codigo que establece un contador que permite armar el condicional
let contadorClicks = 0;
//Codigo que alterna las funciones sobre el mismo boton html
capturarValor.addEventListener('click', function() {
  if (contadorClicks == 0) {
    seleccionarCuenta(inputTransferencia.value)
    contadorClicks += 1;
  } else if (contadorClicks == 1) {
    confirmar();
    contadorClicks -= 1;
  }
});

