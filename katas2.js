function add(numero1,numero2){
    return numero1+numero2;
}
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply(n1,n2){
  let multiplica = 0;
  for(let i = 0; i  < n2; i++){
    multiplica += (add(n1,n1))-n1
  }
  return multiplica
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(oQueSeraElevado,pot){
   let resultado = 1;
   for(let i = 0; i < pot; i++ ){
     resultado = multiply(resultado,oQueSeraElevado)
  }
    return resultado;
}

 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function fatorial(numero){
  let resultadoFatorial = 1;
  for(let i = numero; i > 0; i--){
    resultadoFatorial = multiply(resultadoFatorial, i)
  }
    return resultadoFatorial;
}

 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(numero){
  let seqFibonacci = 0;
  let passado = -1;
  let presente = 1;
  let futuro = presente;
  for(i = 0; i <= numero; i++ ){
    futuro = add(passado,presente)
    passado = presente;
    presente = futuro;
    seqFibonacci = futuro;
  }
    return seqFibonacci;
}

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
