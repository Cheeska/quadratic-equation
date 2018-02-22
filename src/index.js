module.exports =  function solveEquation(equation) {

    var a= (equation.substring(0, equation.indexOf('*'))).replace(/\s+/g, '');
    var b= (equation.substring(equation.indexOf('^2')+2, equation.indexOf('*', equation.indexOf('^2'))-1)).replace(/\s+/g, '');
    var c= (equation.substring(equation.indexOf('x', equation.indexOf('^2'))+1)).replace(/\s+/g, '');
    var x1= null;
    var x2= null;
    var arr= new Array();

   var D = Math.pow(b,2) - 4*a*c;

   if(D>0){
       var x1 = Math.round((-b + Math.sqrt(D)) / (2*a));
       var x2 = Math.round((-b - Math.sqrt(D)) / (2*a));
   }
   else{
       var x1 =  Math.round((-b + Math.sqrt(D)) / (2*a));
   }

    if (x1>x2){
       arr.push(x2);
       arr.push(x1);

    }else{
        arr.push(x1);
        arr.push(x2);
    }
    return arr;
}

function comparator() {
    (left, right) => left - right;
}

