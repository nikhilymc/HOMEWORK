var x =100;
var z = 0;
var y;
while( x != 0){
y = x % 10;

 z =  z * 10 + y;
 x = x / 10 ;

}
console.log(z);
