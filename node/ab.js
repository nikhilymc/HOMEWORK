const mymodule=require('./addmodule');
var x=2;
var y=3;
var z=mymodule.addnum(x,y);
var a=mymodule.subnum(x,y);
var b=mymodule.mulnum(x,y);
console.log(z);
console.log(a);
console.log(b);
