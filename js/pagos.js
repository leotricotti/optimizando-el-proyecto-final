//Variable que contiene el saldo inicial
let saldoCajaAhorro = 150000;
//Array que contiene los servicios proximos a vencer 
const serviciosPorVencer = [];
//Funcion que carga las cuentas habilitadas para recibir transferencias
const cargarServiciosPorVencer = (arr) => {
  arr.push({
    id: "01",
    servicio: "Edesur",
    vencimiento: "31/08/2022",
    importe: "$ 5.8056,23"
  });
  arr.push({
    id: "02",
    servicio: "AySA",
    vencimiento: "05/09/2022",
    importe: "$ 1.553,80"
  });
  arr.push({
    id: "03",
    servicio: "Movistar Hogar",
    vencimiento: "08/09/2022",
    importe: "$ 4.536,58"
  });
  arr.push({
    id: "04",
    servicio: "Metrogas",
    vencimiento: "29/08/2022",
    importe: "$ 4.565,32"
  });
  arr.push({
    id: "05",
    servicio: "Personal",
    vencimiento: "27/08/2022",
    importe: "$ 3.526,32"
  });
}