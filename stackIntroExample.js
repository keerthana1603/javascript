function double(x){
  return 2*x;
}
function squareAndAddFive(y)
{
  return square(y)+5;
}
function square(z){
  return z*z;
}
//push in math and inside math push double inside math then pop double and then push squareAndAddFive then pop sqandadd5 and then return ans and finally pop math
 function maths(num){
   var ans=double(num);
    console.log(ans);
   ans= squareAndAddFive(ans);
   console.log(ans);
 }
maths(5);

