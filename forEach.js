const arr = [10, 12, 15, 19, 30];

//regular forEach function
arr.forEach(element => console.log(element));

Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i]);
    }
}

arr.myForEach(element => console.log(element));