const quicksort=(nums)=>{
  if(nums.length<2)
    return nums;
  const pivot=nums[nums.length-1];
  let left=[];
  let right=[];
  for(let i=0;i<nums.length-1;i++){
    if(nums[i]<pivot){
      left.push(nums[i]);
    console.log(left);
    }
    else{
      right.push(nums[i]);
      console.log(right);
    }
  }
   
  return[...quicksort(left),pivot,...quicksort(right)];
 
}

quicksort([1,8,6,0,9,3])