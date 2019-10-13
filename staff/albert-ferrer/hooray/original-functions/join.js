
var numbers = ['one', 'two', 'three'];

function join (array){
    var result = [];
    for (var i= 0; i < array.length; i++){
        result += array[i];
    };
    return result;
};

console.log(join(numbers));

