const arr = [10, 12, 15, 19, 30];

//Standard map function
const mapArray = arr.map(element => element * 2);
console.log(mapArray);

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
        result.push(callback(this[i]));
    }
    return result;
}

const mapArrayFromPolyfill = arr.myMap(element => element * 2);
console.log(mapArrayFromPolyfill);