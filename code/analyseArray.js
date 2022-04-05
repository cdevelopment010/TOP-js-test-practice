export default function analyseArray(arr) {
    let obj = {}; 
    obj['length'] = arr.length; 


    if (arr.length == 0) {
        obj.max = null; 
        obj.min = null; 
        obj.average = null;
        return obj;
    } 
    

    obj.max = arr.reduce((x, y) => x > y ? x : y, -Infinity); 
    obj.min = arr.reduce((x, y) => x < y ? x : y, Infinity); 
    obj.average = arr.reduce((x,y) => x + y, 0) / arr.length;


    

    return obj; 
}