function myArray(){
    Object.defineProperty(this,"length",{

        value:0,
        writable:true,
        Enumerable:false,
        
    });

    this.length=arguments.length;

    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }
}
let arr1=new myArray(1,2,3,4);
myArray.prototype.push=function(value){
    this[this.length]=value;
    this.length++;
};
arr1.push(6)
console.log(Object.values(arr1));


let arr2=new Array(1,2,3,4,5);
Array.prototype.pop=function(){
    this[this.length-1];
    this.length--;
};
arr2.pop()
console.log(Object.values(arr2));


Array.prototype.top=function(){
    let top=this.length-1
    return this[top]
}
console.log("top",arr2.top());



let arr3=new Array(1,2,3,4,5,6,7);
Array.prototype.print=function(){
    console.log(Object.values(arr3));
};
arr3.print()


let arr4=new Array(1,2,3,4,5);
Array.prototype.reverse=function(){
    let reverse=[]
    for(let i=this.length-1;i>=0;i--)
    {
reverse.push(this[i])
    }
    return reverse;
};
let x=arr4.reverse();
console.log(Object.values(x));


let arr5=new Array(1,2,3);
Array.prototype.size=function(){
let s=this.length
return s;
}
console.log("size",arr5.size());