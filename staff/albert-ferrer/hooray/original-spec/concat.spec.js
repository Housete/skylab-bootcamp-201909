describe('concat',function(){
    it ('Should return an array with the elements of the other arrays.', function () {
        var array1 = ['a','b'];
        var array2 = ['c','d'];
        var result = ['a','b','c','d'];
        expect(concat(array1,array2)).toEqual(result);
    })
    it ('Should return an empty array.', function () {
        var array1 = [];
        var array2 = [];
        var result = [];
       
        expect(concat(array1,array2)).toEqual(result);
    })

 }); 
