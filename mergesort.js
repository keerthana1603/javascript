function mergesort(nums){
  if(nums.length<2)
    return nums;
  const length=nums.length;
  const middle =Math.floor(length/2);
  const left=nums.slice(0,middle);
  const right=nums.slice(middle,length);
  
  const sortedright=mergesort(right);
  const sortedleft=mergesort(left);
  console.log(sortedleft);
  console.log(sortedright);
  //return stitch(mergesort(left),mergesort(right));
  return stitch(sortedleft,sortedright);
};
const stitch=(left,right)=>{
  const results=[];
 
  while(left.length&&right.length){
    if(left[0]<=right[0]){
      results.push(left.shift());
       }
    else{
      results.push(right.shift());
    }
    
  }
   console.log(results.concat(right,left));
   console.log(...results,...left,...right);//... is the spread operator in es6 which spread all the elements in that array
    while(left.length){
      results.push(left.shift());
    }
    while(right.length){
      results.push(right.shift());
    }
    return results;
    console.log(results);  
  console.log(results[4]);
}
mergesort([1,5,8,2,7,9,0]);