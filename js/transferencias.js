//Variable que contiene el saldo inicial
let saldoCajaAhorro = 150000;
//Array que contiene las cuentas habilitadas para recibir transferencias
const cuentasHabilitadas = [];
//Funcion que carga las cuentas habilitadas para recibir transferencias
const cargarCuentasHabilitadas = () => {
  cuentasHabilitadas.push({
    id: "01",
    titular: "Gómez, Sandra",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "4069-5689756/5",
    entidad: "Banco Galicia"
  });
  cuentasHabilitadas.push({
    id: "02",
    titular: "Suarez, Analía",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "5879-789700/4",
    entidad: "Banco Hipotecario"
  });
  cuentasHabilitadas.push({
    id: "03",
    titular: "Castro, Cintia",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "4565-991626/8",
    entidad: "Banco Provincia"
  });
  cuentasHabilitadas.push({
    id: "04",
    titular: "Alonso, Juan Alberto",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "2356-123055/5",
    entidad: "Banco Santander"
  });
  cuentasHabilitadas.push({
    id: "05",
    titular: "Villareal, Susana",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "4566-978600/4",
    entidad: "Banco Galicia"
  });
  cuentasHabilitadas.push({
    id: "06", 
    titular: "Odello, Alma",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "4566-462347/1",
    entidad: "Banco Nación"
  });
  cuentasHabilitadas.push({
    id: "07",
    titular: "López, Susana",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "5765-274416/7",
    entidad: "Banco Hipotecario"
  });
  cuentasHabilitadas.push({
    id: "08",
    titular: "Szulz, Alffedo",
    tipo: "Caja de Ahorro",
    moneda: "$",
    cuenta: "8765-602337/9",
    entidad: "Banco Provincia"
  });
  cuentasHabilitadas.push({
    id: "09",
    titular: "Sandoval, Pamela",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "3575-389726/4",
    entidad: "Banco Ciudad"
  });
  cuentasHabilitadas.push({
    id: "10",
    titular: "Gaetani, Romina",
    tipo: "Cuenta Corriente",
    moneda: "$",
    cuenta: "6525-753493/4",
    entidad: "Banco Roela"
  });
}
//Llamada a la funcion que carga las cuentas en el array de cuentas habilitadas
cargarCuentasHabilitadas();
//Funcion que inyecta la tabla cuentas habilitadas a recibir transferencias en el html
function selecionarCuenta() {
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
  //Codigo que recorre el array de cuentas creado anteriormente y asigna casda elemento a su culumna
  for (const cuenta of cuentasHabilitadas) {
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
};
//Llamada a la funcion que inyecta informacion de las cuentas habilitadas para recibir transferencias en el html
selecionarCuenta();

//Codigo que captura el boton que confirma la operacion
const captura = document.getElementById("extracciones-submit");
//Codigo que captura el boton que modifica la operacion
const clean = document.getElementById("limpiar-campo");
//Codigo que captura el campo donde el usuario debe ingresar la cantidad de dinerao que desea depsositar
let inputExtraccion = document.getElementById("extracciones-input");
//Funcion que captura la fecha en que se realiza la operación
const capturarDiaExtraccion = () => new Date().toLocaleDateString();
//Funcion que captura la hora en que se realiza la operacion
const capturarHoraExtraccion = () => new Date().toLocaleTimeString();
//Codigo que informa el tipo de operacion
const nombrarOperacion = () => "Extraccion Adelanto";
//Funcion que captura la informacion sobre la operacion provista por el usuario
const extraerDinero = () => inputExtraccion.value;
//Funcion que parsea el numero ingresado por el usuario
const parsearDineroExtraido = () => parseInt(extraerDinero());
//Codigo que actualiza el saldo de la caja de ahorro simulada
const actualizarSaldoCajaAhorro = () => {
  saldoCajaAhorro = saldoCajaAhorro - parsearDineroExtraido();
  return saldoCajaAhorro;
};
//Funcion que convierte al formato de moneda local el dato parseado
const numeroADinero = () => numeroAPesos(extraerDinero());
//Codigo que convierte al formato de moneda local el saldo simulado
const convertirSaldoADinero = () => numeroAPesos(actualizarSaldoCajaAhorro());
//Funcion que coinvierte un numero al formato de pesos argentinos
const numeroAPesos = (dinero) => {
  return (dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(dinero));
};
//Funcion que captura la informacion brindada por el usuario y la convierte en un objeto
captura.onclick = () => {
  // Constructor del objeto depositos;
  class Extraccion {
    constructor(fecha, hora, operacion, monto, saldo) {
      this.fecha = fecha;
      this.hora = hora;
      this.operacion = operacion;
      this.monto = monto;
      this.saldo = saldo;
    }
  }
  //Codigo que utiliza el constructor Depositos para crear un nuevo objeto que contiene los datos de la operacion realizada
  nuevaExtraccion = new Extraccion(
    capturarDiaExtraccion(),
    capturarHoraExtraccion(),
    nombrarOperacion(),
    numeroADinero(),
    convertirSaldoADinero()
  );
  //Llamada a las funciones declaradas
  confirmarOperacion();
  modificarOpcion();
  agregarTexto();
  modificarOpcion();
};
//Funcion que devuelve al usuario la confirmacion de su operacion
const text = document.querySelector(".text");
confirmarOperacion = () => {
  text.innerHTML = "";
  text.innerText = `
  Operacion realizada con exito. Su saldo es: ${nuevaExtraccion.saldo}
  `;
};
// Funcion que limpia el campo input en caso de que el usuario quiera modificar el importe a extraer
clean.onclick = () => {
  inputExtraccion.value = "";
};
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function agregarTexto() {
  //Codigo que agrega texto al html
  let textoAgregado = document.querySelector(".agregar-texto");
  textoAgregado.innerText = "Desea realizar otra operacion?";
}
//Funcion que modifica el HTML al momento de devolver la operacion solicitada por el usuario
function modificarOpcion() {
  //Codigo que cambia texto del html
  let opcionModificada = document.querySelector(".opcion-modificada");
  opcionModificada.innerHTML = "";
  opcionModificada.innerHTML =
    "<p>Si</p> <a href='../cajero/cajero.html'> <div class='btn-derecha' id='btn-saldo'></div></a></li>";
  //Codigo que cambia texto del html
  let opcionModificadaDos = document.querySelector(".opcion-modificada-dos");
  opcionModificadaDos.innerHTML = "";
  opcionModificadaDos.innerHTML =
    '<p>No</p> <a href="../salir/salir.html" class="link"> <div class="btn-derecha"></div></a>';
}

