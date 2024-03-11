const arr = [10, 12, 15, 19, 30];

//Standard filter function
const reducedValue = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(reducedValue);

Array.prototype.myReduceFunction = function(callback, initialValue){
    let acc= initialValue;
    for(let i=0; i<this.length; i++){
        acc = acc ? callback(acc, this[i]) : this[i];
    }
    return acc;
}

const reducedValueFromPolyfill = arr.myReduceFunction((acc, cur) => {
    return acc + cur;
}, 0);
console.log(reducedValueFromPolyfill);