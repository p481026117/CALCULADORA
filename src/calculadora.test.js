describe("Calculadora ", () => {
  it("deberia devolver el numero ingresado", () => {
    expect(sumar(3)).toEqual(3);
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

function sumar(cadena){
  return cadena;
}

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
