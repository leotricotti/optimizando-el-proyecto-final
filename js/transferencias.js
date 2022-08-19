let saldoCajaAhorro = 150000;
const cuentasHabilitadas = [
    {titular: "Gómez, Sandra", tipo: "Caja de Ahorro", moneda: "$", cuenta: "4069-5689756/5", entidad: "Banco Galicia"},
    {titular: "Suarez, Analía", tipo: "Cuenta Corriente", moneda: "$", cuenta: "5879-789700/4", entidad: "Banco Hipotecario"},
    {titular: "Castro, Cintia", tipo: "Cuenta Corriente", moneda: "$", cuenta: "4565-991626/8", entidad: "Banco Provincia"},
    {titular: "Alonso, Juan Alberto", tipo: "Caja de Ahorro", moneda: "$", cuenta: "2356-123055/5", entidad: "Banco Santander"},
    {titular: "Villareal, Susana", tipo: "Cuenta Corriente", moneda: "$", cuenta: "4566-978600/4", entidad: "Banco Galicia"},
    {titular: "Odello, Alma", tipo: "Caja de Ahorro", moneda: "$", cuenta: "4566-462347/1", entidad: "Banco Nación"},
    {titular: "López, Susana", tipo: "Caja de Ahorro", moneda: "$", cuenta: "5765-274416/7", entidad: "Banco Hipotecario"},
    {titular: "Szulz, Alffedo", tipo: "Caja de Ahorro", moneda: "$", cuenta: "8765-602337/9", entidad: "Banco Provincia"},
    {titular: "Sandoval, Pamela", tipo: "Cuenta Corriente", moneda: "$", cuenta: "3575-389726/4", entidad: "Banco Ciudad"},
    {titular: "Gaetani, Romina", tipo: "Cuenta Corriente", moneda: "$", cuenta: "6525-753493/4", entidad: "Banco Roela"}
]
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
}
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
}
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
}
// Funcion que limpia el campo input en caso de que el usuario quiera modificar el importe a extraer
clean.onclick = () => {
  inputExtraccion.value = "";
 }
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

