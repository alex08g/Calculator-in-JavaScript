(function() {
    'use strict';

    // Objeto com operações da calculadora
    const operation = {
        "+"( n1, n2 ) {
            return n1 + n2;
        },
        "-"(n1, n2) {
            return n1 - n2;
        },
        "*"(n1, n2) {
            return n1 * n2;
        },
        "/"(n1, n2) {
            return (n1 / n2).toFixed(1);
        },
        "%"(n1, n2) {
            return n1 % n2;
        }

    };

    // verificando se o operador está presente no objeto das operações!
    const isOperatorValid = operator => {

        //o "!!" é ussado para retornar o valor booleano de operation[ operator ]
        return !!operation[ operator ]
    }

    // calculadora 
    const calculator = operator => {
        
        if ( !isOperatorValid( operator ) ) return false;

        return function( n1, n2 ) {

            // verificando se os parametros n1 e n2 são do tipo number
            if ( typeof(n1) !== 'number' || typeof(n2) !== 'number') return false;

            // retornando à função refente ao parametro operator passado, que no caso seria a operação desejada, 
            // utilizando nessa função os parametros n1 e n2, que serão utilizados na operação! 
            return operation[ operator ]( n1, n2 )
            
        }
    }

    const showOperationMessage = ( operator, n1, n2 ) => {
        return `A operação ${ n1 } ${ operator } ${ n2 } =`;
    }

    const showErrorMessage = operator => {
        return `Operação "${ operator }" não permitida!`;
    }

    const verifyOperation = ( operator , value1, value2 ) => {
        if ( operator ) {
            number1 = value1;
            number2 = value2;
            console.log(showOperationMessage( operationSignal, number1, number2), operator( number1, number2 ) );
        } else { console.log(showErrorMessage( operationSignal )); }
    }
    
    
    // OPERATIONS
    // VARIÁVEIS PARA AS OPERAÇÕES
    let number1 = 0;
    let number2 = 0;
    let operationSignal;


    // ADIÇÃO
    operationSignal = '+';
    let sum = calculator( operationSignal );

    verifyOperation(sum, 4, 6);


    // SUBTRAÇÃO
    operationSignal = '-';
    let subtraction = calculator( operationSignal );

    verifyOperation(subtraction, 100, 50);


    // MULTIPLICAÇÃO
    operationSignal = '*';
    let multiplication = calculator( operationSignal );

    verifyOperation(multiplication, 100, 50);


    // DIVISÃO
    operationSignal = '/';
    let division = calculator( operationSignal );

    verifyOperation(division, 100, 75);


    // RESTO DA DIVISÃO
    operationSignal = '%';
    let mod = calculator( operationSignal );

    verifyOperation(mod, 75, 50);


})();