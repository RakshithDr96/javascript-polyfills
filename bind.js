function printPersonInfo(age, city){
    console.log(this.name+" "+age+" "+city);
}

const person1 = {
    name: "Rakshit Shetty",
}

const newFunc = printPersonInfo.bind(person1, 28);

newFunc("Bangalore");

Function.prototype.myBind = function(obj={}, ...args1){
    if(typeof this !== "function"){
        throw new Error("Not callable");
    }
    obj.fn = this;
    return function(...args2){
        obj.fn(...args1, ...args2);
    }
}

const newBoundedFunc = printPersonInfo.myBind(person1, 28);
newBoundedFunc("Bangalore");
