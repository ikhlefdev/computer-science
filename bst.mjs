
class Node{
    constructor(data,left,right){
       this.data=data
       this.left=null
       this.right=null
    }
}
export class Tree{
    constructor(array){
        
       this.root=this.BuildTree(array)
    }
    BuildTree(array){    //this should return the level 0 root
        //sort the array and remove duplicates

        //set the middle of the array as root
        if (array.length === 0) return null;
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);  //create a set (get rid of duplicates) the convert it back to an array and sort it
        let mid=Math.floor(sortedArray.length/2)
        let root=new Node(sortedArray[mid])
        //recursively do the same to the right and half
        root.left=this.BuildTree(sortedArray.slice(0,mid))
        root.right=this.BuildTree(sortedArray.slice(mid+1))
        return root 
        
    }
    insert(root, value) {
        if (root === null) {
            root = new Node(value);
            return root;
        }

        if (value === root.data) {
            return root;  // No duplicates
        }

        if (value < root.data) {
            root.left = this.insert(root.left, value);
        } else {
            root.right = this.insert(root.right, value);
        }

        return root;
    }

    getSuccessor(curr){
        curr=curr.right
        while(curr!==null && curr.left!==null){
            curr=curr.left
        }
        return curr 
    }
    delete(root,value){
        if (root===null){
           return root 
        }
         // If value to be searched is in a subtree
    if (root.data > value) {
        root.left = this.delete(root.left, value);
    } else if (root.data < value) {
        root.right = this.delete(root.right, value);
    } else {
        // If root matches with the given value

        // Cases when root has 0 children or 
        // only right child
        if (root.left === null) {
            return root.right;}

        // When root has only left child
        if (root.right === null) {
            return root.left;}

        // When both children are present
        else{
        let successor = this.getSuccessor(root);
        console.log(successor)
        root.data = successor.data;
        root.right = this.delete(root.right, successor.data);
    }}
    return root;

    }

    find(root,value){
        if (root.data===value){
            return root
        }
        else {

            if(value>root.data){
                return this.find(root.right,value)
            }
            if(value<root.data){
              return this.find(root.left,value)
          }
        }


    }
    LevelOrderITE(callback){       //iterative approach
        if (!callback){
            throw console.error("you need to provide a callback");
            
        }
        let queue=[this.root]
        while(queue.length!==0){
            const current=queue.shift()
            callback(current)
            if(current.left){
            queue.push(current.left)}
            if(current.right){
            queue.push(current.right)}
        }
    }
    levelOrderREC(callback) {
        if (!callback) {
            throw new Error("You need to provide a callback");
        }
    
        let queue = [this.root];
        function traverse() {
            if (queue.length === 0) {
                return;  // Base case: stop if the queue is empty
            }
    
            const node = queue.shift();  // Dequeue the first node
            callback(node);              // Process the node with the callback
    
            // Add children to the queue for the next level
            if (node.left) {
                queue.push(node.left);   // Enqueue the left child if it exists
            }
            if (node.right) {
                queue.push(node.right);  // Enqueue the right child if it exists
            }
    
            // Recursively call traverse to process the next node in the queue
            traverse();
        }
    
        traverse();  // Start the recursive traversal

}

    preOrder(root=this.root,callback){
        if (!callback) {
            throw new Error("You need to provide a callback");
        }
        if(root===null) return
        else{
           callback(root)
           this.preOrder(root.left,callback)
           this.preOrder(root.right,callback)
        }

    }
    inOrder(root=this.root,callback){
        if (!callback) {
            throw new Error("You need to provide a callback");
        }
        if(root===null) return
        else{
           this.inOrder(root.left,callback)
           callback(root)
           this.inOrder(root.right,callback)
        }
    

    }
    postOrder(root=this.root,callback){
        if (!callback) {
            throw new Error("You need to provide a callback");
        }
        if(root===null) return
        else{
           this.postOrder(root.left,callback)
           this.postOrder(root.right,callback)
           callback(root)
        }
    }
    height(node=this.root){
    if (node === null) return -1; // Base case: return -1 for null node
    if (node.left === null && node.right === null) return 0; // Leaf node has height 0
    
    // Recursive case: height is the max of left and right subtrees + 1
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    return Math.max(leftHeight, rightHeight)+1 ;
    }
    depth(node=this.root,target){
     // Base case: If the current node is null, return -1 (not found)
     if (node === null) return -1;

     // If the current node matches the target node, return 0 (found)
     if (node === target) return 0;
 
     // Check the left subtree
     let leftDepth = this.depth(node.left, target);
     if (leftDepth !== -1) {
         // If found in left subtree, increment and return the depth
         return leftDepth + 1;
     }
 
     // Check the right subtree
     let rightDepth = this.depth(node.right, target);
     if (rightDepth !== -1) {
         // If found in right subtree, increment and return the depth
         return rightDepth + 1;
     }
 
     // If the target node is not found in either subtree, return -1
     return -1;

    }
    isBalanced(root=Node){
        if (!root){return true}
        const rightHeight=this.height(root.left)
        const leftHeight=this.height(root.right)
        if (
            Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalanced(root.left) &&
            this.isBalanced(root.right)
          )
            return true;
          else return false;
        }
      


    
    rebalance(root=this.root){
        if(!this.isBalanced){
        // Step 1: Use inOrder to collect the nodes in sorted order
        const values = [];
        this.inOrder(root, (node) => values.push(node.value));

        // Step 2: Build a new balanced tree using BuildTree
        return balancedRoot = this.BuildTree(values);
  
    }}


}