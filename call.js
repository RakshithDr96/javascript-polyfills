function printPersonInfo(){
    console.log(this.name+" "+this.age+" "+this.city);
}

const person1 = {
    name: "Rakshit",
    age: 28,
    city: "Bangalore"
}

printPersonInfo.call(person1);

Function.prototype.myCall = function(obj={}, ...args){
    if(typeof this !== "function"){
        throw new Error("Not callable");
    }
    obj.fn = this;
    obj.fn(...args);
}

printPersonInfo.myCall(person1);