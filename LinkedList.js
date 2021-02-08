class LinkedList{
  constructor(){
    this.head-null;
    this.tail=null;
    this.length=0;
  }
  push(value){
    const node= new Node(value);
    this.length++;
    if(!this.head){
      this.head=node;
    }
    else{
      this.tail.next=node;
    }
  }
  pop(){
    return this.delete(this.length-1);
  }
  _find(value, test=this._test){
    let current = this.head;
    let i=0;
    while(current){
      if(test(value,current.value,i,current)){
        return current;
      }
      current=current.next;
      i++;
    }
    return null;
  }
  _test(a,b){
    return a===b;
  }
  get(index){
    const node =this._find(index,__,this._testIndex);
    if(!node) 
      return null;
    else
      return node;
  }
  delete(index){
    if(index===0){
      const head=this.head;
      if(head){
        this.head=head.next;
      }
      else{
        this.tail= this.head=null;
      }
      this.length--;
      return head.value;      
    }
    const node=this._find(index-1,this._testIndex);
    const excise=node.next;
    if(!excise){
      return null;
    }
    node.next=excise.next;
    if(node.next&&!node.next.next){
      this.tail=node.next;
    }
    this.length--;
    return excise.value;
  }
  _testIndex(search, __,i){//__ means dont care/not used that parameter  is not used
    return search === i;
  }
}


class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
  
}