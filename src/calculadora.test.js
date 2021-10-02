const reducer = (accumulator, curr) => accumulator + curr;

describe("Calculadora ", () => {
  it("deberia devolver el numero ingresado", () => {
    expect(Operacion("3")).toEqual(3);
  });
  it("deberia devolver la suma de la cadena", () => {
    expect(Operacion("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de la cadena", () => {
    expect(Operacion("1,2-3")).toEqual(6);
  });
  it("probando funcion delimitadores", () => {
    expect(ObtenerDelimitadores("[***,hh,y]")).toEqual("***", "hh", "y");
  });
  // it("deberia calcular para un cantidad", () => {
  //   expect(calcularTotal(2, 2, "")).toEqual(4);
  // });
  // it("deberia calcular para un estado por defecto", () => {
  //   expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  // });
  // it("deberia calcular para un estado por defecto", () => {
  //   expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  // });
  // it("deberia calcular para un estado por defecto", () => {
  //   expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  // });
});

function Operacion(cadena)
{
  if(!(cadena.match("//"))) //si la cadena no coincide con el caracter "//"
    return Sumar(cadena);
  else
  {
    delimitadores = cadena.split([/\n/])[0];
    cadenaNumeros = cadena.split([/\n/])[1];
    return ObtenerNumeros(cadena,delimitadores)
  }
  
      
  //return Sumar(cadenaNumeros)
}
  //
function ObtenerDelimitadores(delimitadores)
{
  return delimitadores.replace("//","").replace("]","").replace("[","").split(",");
}
function Sumar(cadena)
{

  
  let reg = /\s*(?:-|,|$)\s*/
  //let tmp = cadena.split(reg);
  let tmp = cadena.split(reg).map(i => parseInt(i,10));
  //var resp = cadena.reduce(reducer)
  //return tmp;
  // var tmp1 = [1,2];
  return tmp.reduce(reducer);
}

// function delimitador(cadena, arrayDelimitadores){
//   cadena.replace(/[-]/g, ',');
//   for (let value of arrayDelimitadores) 
//     cadena.replace(/value/g, ',');
// }



// function impuestoEstado(estado) {
//   let impuestos = { CA: 0.0825, UT: 0.0665, "": 0 };
//   return impuestos[estado];
// }

// function calcularTotal(cantidad, precio, estado) {
//   let subTotal = cantidad * precio;
//   let impuesto = impuestoEstado(estado);
//   subTotal = subTotal + subTotal * impuesto;
//   return subTotal;
// }
