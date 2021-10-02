import libreria from './calculadora.js';

describe("Calculadora de Cadenas ", () => {
  it("deberia devolver el numero ingresado 3  ====>  3", () => {
    expect(libreria.CalcularCadena("3")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2  ====>  3", () => {
    expect(libreria.CalcularCadena("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2-3  ====>  6", () => {
    expect(libreria.CalcularCadena("1,2-3")).toEqual(6);
  });
  it("probando funcion Resultado deberia devolver una cadena separada por comas", () => {
    expect(libreria.CadenaConDelimitadores("3***2hh1y1","[***][hh][y]")).toEqual("3,2,1,1");
  });
  it("deberia devolver la suma de la [*][%]\n1*2%3,7-9  ====>  22", () => {
    expect(libreria.CalcularCadena("//[*][%]\n1*2%3,7-9")).toEqual(22);
  });
  it("deberia devolver la suma de la [***][%]\n1***2000%1001,7000-9  ====>  10", () => {
    expect(libreria.CalcularCadena("//[***][%]\n1***2000%1001,7000-9")).toEqual(10);
  });
});

