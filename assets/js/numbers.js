function compute(expression) {
    var total = 0;
    var s = expression
    // Seperate values with operators
s = s.replace(/\s/g, '').match(/[+\-*/]?([0-9\.\s]+)/g) || [];
return eval(expression)

}