const arr = [10, 22, 17, 19, 30];

//Regular filter function
const filteredArray = arr.filter(element => element % 2);
console.log(filteredArray);

Array.prototype.myFilterFunction = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
        callback(this[i]) && result.push(this[i]);
    }
    return result;
}

const filteredArrayFromPolyfill = arr.myFilterFunction(element => element % 2);
console.log(filteredArrayFromPolyfill);
