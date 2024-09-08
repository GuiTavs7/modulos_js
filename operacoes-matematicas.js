// 1) Criando módulo com funções de operações matemáticas para exportar

function somar(numero1, numero2){
    return numero1 + numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

/*  

1.1) Aqui usaremos a exportação/importação nomeada, justamente por estarmos trabalhando com chaves e 
     ser possível importar/exportar mais de uma função por arquivo!

*/

export {somar, multiplicar};