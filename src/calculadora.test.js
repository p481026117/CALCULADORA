const reducer = (accumulator, curr) => accumulator + curr;

describe("Calculadora ", () => {
  it("deberia devolver el numero ingresado 3  ====>  3", () => {
    expect(Operacion("3")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2  ====>  3", () => {
    expect(Operacion("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2-3  ====>  6", () => {
    expect(Operacion("1,2-3")).toEqual(6);
  });
  // it("probando funcion delimitadores", () => {
  //   expect(Resultado("", "[***,hh,y]")).toEqual(["***", "hh", "y"]);
  // });
  it("probando funcion Resultado deberia devolver una cadena separada por comas", () => {
    expect(Resultado("3***2hh1y1","[***][hh][y]")).toEqual("3,2,1,1");
  });
  it("deberia devolver la suma de la [*][%]\n1*2%3,7-9  ====>  22", () => {
    expect(Operacion("//[*][%]\n1*2%3,7-9")).toEqual(22);
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
    let dividir = cadena.split(["\n"]);
    let delimitadores = dividir[0];
    let cadenaNumeros = dividir[1];
    //console.log(delimitadores);
    //console.log(cadenaNumeros);
    let res = Resultado(cadenaNumeros,delimitadores);
    //console.log(res);
    return Sumar(res);
    //return Sumar(Resultado(cadenaNumeros,delimitadores))

    // let dividir = cadena.split(["\n"]);
    // return dividir[0];
  }
  
      
  //return Sumar(cadenaNumeros)
}
  //
function Resultado(cadenaNumeros, delimitadores)
{
  //let cadena = cadenaNumeros.join("");
  let del = delimitadores;
  console.log("CADENA DE NUMEROS\n"+cadenaNumeros);
  console.log("DELIMITADORES\n"+del);
  del = del.replace(/[[]|[/]/gm,"").replace(/(])/gm,",").split(",");
  // console.log("LIMPIANDO DELIMITADORES\n"+del);
  // del = del.split(",");
  del.pop();
  console.log("LIMPIANDO DELIMITADORES\n"+del);
  for(let value of del)
    cadenaNumeros = cadenaNumeros.replace(value, ',');
  console.log("RESULTADO\n" + cadenaNumeros);
  return cadenaNumeros;
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
