/**
 * reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 * @param {Array} array  array with the elements that will be returned inversely.
 * 
 */


var numbers = ['one','two','three'];

function reverse(array){
    newAr=[];
    let j = 0
    for (var i=array.length -1; i >= 0; i--){
        newAr[j++]= array[i];
    };
    return newAr;
};
console.log(reverse(numbers));