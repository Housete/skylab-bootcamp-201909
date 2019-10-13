describe('slice',function(){
    it ('should return an array from begin.', function () {
        var array = ['a','b','c','d'];
        var result = ['b','c','d']
        expect(slice(array,1)).toBe(result);
    })
    it ('should return a new array with all the elements', function () {
        var array = ['a','b','c','d'];
        var result = ['a','b','c','d']
        expect(slice(array)).toBe(result);
    })
    it ('should return a new empty array..', function () {
        var array = ['a','b','c','d'];
        var result = [];
        expect(slice(array,6)).toBe(result);
    })
    it ('should return a new array with the last two elements.', function () {
        var array = ['a','b','c','d'];
        var result = ['c','d']
        expect(slice(array,2,-7)).toBe(result);
    })
    
});