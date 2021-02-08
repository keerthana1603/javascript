const bubblesort=(nums)=>{
  
  do{
    var swapped=false;
    for(let i=0;i<nums.length;i++){
      //snapshot(nums);
      if(nums[i]>nums[i+1]){
        console.log(nums);
        let temp=nums[i];
        nums[i]=nums[i+1];
        nums[i+1]=temp;
        swapped=true;
      }
      
    }
  }while(swapped)
    return nums
};
  bubblesort([1,8,4,3,0]);
const insertionsort=(num)=>{
  for(let i=1;i<num.length;i++){
    for(let j=0;j<i;j++){
      if(num[i]<num[j]){
         console.log(num);
        const spliced=num.splice(i,1);
        console.log(num);
        console.log(spliced);
        num.splice(j,0,spliced[0]);
      }
    }
  }
  return num;
};
insertionsort([1,8,4,3,0]);