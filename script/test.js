/*

var Queue = function() {
    this.array=[];
};

Queue.prototype.enqueue = function(item) {
    this.array.push(item);

};

Queue.prototype.dequeue = function() {
    this.array.shift();
};

Queue.prototype.size = function() {
    return this.array.length;
};
*/
function Parent(){
    this.name = 'mike';
}

function Child(){
    this.age = 12;
}
Child.prototype = new Parent();//Child??Parent??????????

var test = new Child();

console.log(test.age);
console.log(test.name);