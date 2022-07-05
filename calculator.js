function calc() {
    const operation = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if(!operation || operation >= 7) {
        alert('Opção Inválida!');
        calc();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let result;

        if(!n1 || !n2) {
            alert('Erro! Parâmetros Inválidos!');
            calc();
        } else {
            function sum() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`)
                calc();
            }
            function subtraction() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`)
                calc();
            }
            function multiplication() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`)
                calc();
            }
            function realDivision() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`)
                calc();
            }
            function integerDivision() {
                result = n1 % n2;
                alert(`${n1} % ${n2} resta ${result}`)
                calc();
            }
            function potentiation() {
                result = n1 ** n2;
                alert(`${n1} elevado à ${n2} = ${result}`)
                calc();
            }
        }

        switch(operation) {
            case 1: 
                sum();
                break;
            case 2: 
                subtraction();
                break;
            case 3:
                multiplication();
                break;
            case 4:
                realDivision();
                break;
            case 5:
                integerDivision();
                break;
            case 6:
                potentiation();
                break;            
        }        
    }
}    

calc();