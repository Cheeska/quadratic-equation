//module.exports =
function solveEquation(equation) {

    var a= (equation.substring(0, equation.indexOf('*'))).replace(/\s+/g, '');
    var b= (equation.substring(equation.indexOf('^2')+2, equation.indexOf('*', equation.indexOf('^2'))-1)).replace(/\s+/g, '');
    var c= (equation.substring(equation.indexOf('x', equation.indexOf('^2'))+1)).replace(/\s+/g, '');
    var D=0;
    var x1=null;
    var x2=null;




}


var equation = '-417 * x^2 + 806708601 * x + 3174554007677316';

console.log( solveEquation(equation));