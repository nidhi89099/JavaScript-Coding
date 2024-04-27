function fibonacciGenerator (n) {
    var z = [];
//for(var i=0; i<n; i++)


  if(n<=1){
    z.push(0,1)
  }
if(n==2)
{
  z.push(n+1)
}
for(var i=0; i<n; i++){
if(i>2)
{
  z.push((i-1)+(i-2))
}
}

  console.log(z)
   
}
console.log(fibonacciGenerator (13));//0, 1, 1, 2, 3, 5, 8, 13,
//1,2,2,3,5