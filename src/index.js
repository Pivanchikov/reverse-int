module.exports = function reverse (number){
    number = String(Math.abs(number));
    let arr = [];
    for (i = 0; i< number.length; i++) {
        arr.unshift(number[i]);
    }
   return arr = Number( arr.join(""));
}

