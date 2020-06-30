function compute(expression) {
    var total = 0;
    var s = expression
    // Seperate values with operators
s = s.replace(/\s/g, '').match(/[+\-*/]?([0-9\.\s]+)/g) || [];
s.forEach(element => {
    if (element.indexOf('*') != -1){
        element = element.slice(1)
        console.log(element)
        total = total * parseInt(element)
    }else if (element.indexOf('/') != -1){
        element = element.slice(1)
        console.log(element)
        total = total / parseInt(element)
    } else {
        total += parseFloat(element)
    }

    console.log(element)

});

return total


}