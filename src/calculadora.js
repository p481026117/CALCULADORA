const reducer = (accumulator, curr) => accumulator + curr;
function CalcularCadena(cadena){
  if(!(cadena.match("//"))) //si la cadena no coincide con el caracter "//"
    return Sumar(cadena);
  else{
    let dividir = cadena.split(["\n"]);
    let delimitadores = dividir[0];
    let cadenaNumeros = dividir[1];
    let res = CadenaConDelimitadores(cadenaNumeros,delimitadores);
    return Sumar(res);
  }
}
function CadenaConDelimitadores(cadenaNumeros, delimitadores){
  delimitadores = delimitadores.replace(/[[]|[/]/gm,"").replace(/(])/gm,",").split(",");//Ej: [**][##] ==> **,##
  delimitadores.pop();
  for(let value of delimitadores)//convirtiendo los delimitadores de cadenaNumeros en "," Ej: 1%%2###2 ==> 1,2,2
    cadenaNumeros = cadenaNumeros.replace(value, ',');
  return cadenaNumeros;
}
function Sumar(cadena){
  let tmp = cadena.split(/\s*(?:-|,|$)\s*/).map(i => parseInt(i,10)).filter(i => i <= 1000);
  return tmp.reduce(reducer);
}
module.exports = {
    CalcularCadena,
    CadenaConDelimitadores
}