var ar=['a','b','c','d','e'];

function slice (array, start, end){
    var result= [];
    for (var i= start; i < end; i++){
        result[i-start]=array[i];
    };
    return result;
};


