const reducer = (accumulator, curr) => accumulator + curr;

describe("Calculadora de Cadenas ", () => {
  it("deberia devolver el numero ingresado 3  ====>  3", () => {
    expect(CalcularCadena("3")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2  ====>  3", () => {
    expect(CalcularCadena("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de la 1,2-3  ====>  6", () => {
    expect(CalcularCadena("1,2-3")).toEqual(6);
  });
  it("probando funcion Resultado deberia devolver una cadena separada por comas", () => {
    expect(CadenaConDelimitadores("3***2hh1y1","[***][hh][y]")).toEqual("3,2,1,1");
  });
  it("deberia devolver la suma de la [*][%]\n1*2%3,7-9  ====>  22", () => {
    expect(CalcularCadena("//[*][%]\n1*2%3,7-9")).toEqual(22);
  });
  it("deberia devolver la suma de la [***][%]\n1***2000%1001,7000-9  ====>  10", () => {
    expect(CalcularCadena("//[***][%]\n1***2000%1001,7000-9")).toEqual(10);
  });
});

function CalcularCadena(cadena)
{
  if(!(cadena.match("//"))) //si la cadena no coincide con el caracter "//"
    return Sumar(cadena);
  else
  {
    let dividir = cadena.split(["\n"]);
    let delimitadores = dividir[0];
    let cadenaNumeros = dividir[1];
    let res = CadenaConDelimitadores(cadenaNumeros,delimitadores);
    return Sumar(res);
  }

}
function CadenaConDelimitadores(cadenaNumeros, delimitadores)
{
  delimitadores = delimitadores.replace(/[[]|[/]/gm,"").replace(/(])/gm,",").split(",");//Ej: [**][##] ==> **,##
  delimitadores.pop();
  for(let value of delimitadores)//convirtiendo los delimitadores en ","
    cadenaNumeros = cadenaNumeros.replace(value, ',');
  return cadenaNumeros;
}
function Sumar(cadena)
{
  let tmp = cadena.split(/\s*(?:-|,|$)\s*/).map(i => parseInt(i,10)).filter(i => i <= 1000);
  return tmp.reduce(reducer);
}