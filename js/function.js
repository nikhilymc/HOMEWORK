var num1=100;
var num2=160;
var rem=0;
var rev=0;
var c;
var num=add(num1,num2);
var num3=sub(num1,num2);
var num4=reverse(num2);
mul(num1,num2);
console.log(z);
console.log(a);
console.log(b);
console.log(rev);

function add(x,y){
    z=x+y;
    return z;
}
function sub(x,y){
    a=x-y;
    return z;

}   
function mul(x,y){
    b=x*y;
    return b;

}  
function reverse(a){
    while(a>0){
        rem=a%10;
        rev=rev*10+rem;
        a=parseInt(a/10);

    }
    return rev;
}                                                                                                         