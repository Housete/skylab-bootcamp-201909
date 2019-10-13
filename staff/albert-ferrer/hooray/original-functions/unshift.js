ar=[1,2,3,4];

function unshift(array){
    debugger
    for (var i=array.length -1; i >= 0; i--){
        array[i+arguments.length-1]=array[i];
    };
    for (var j=0; j < arguments.length-1;j++){
        array[j]=arguments[j+1];
    }
    return array.length;
};
console.log(unshift(ar,5,6));


