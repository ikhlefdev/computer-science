export class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    append(value){ //adds a value to the end of the list
         const newnode =new Node(value)
         if (this.head===null){
            this.head=newnode
         }
         else{
        let current=this.head
        while(current.next!==null){
            current=current.next 
        }
        current.next=newnode
             
         }
         this.size++ 
    }
    prepend(value){   //ads a value to the start of the list
        const newnode=new Node()
        if(this.head===null){
            this.head=newnode
        }
        else{
            newnode.next=this.head 
            this.head=newnode
        }
        this.size++
    }
    sizy(){   //returns the size of the list
        let current=this.head
        let size=0
        while(current.next!==null){
            current=current.next 
            size++
        }
        return size
    } 
    heady(){ //returns the first node of the list
         return this.head 
    }
    tail(){ //returns the first node of the list
        let current=this.head 
        while(current.next!==null){
            current=current.next 
        }
        return current
    }
    at(index){ //returns the node at the given index
        let current=this.head 
        while(current.next!==null){
            current=current.next 
            i++
            if (i===index){ 
                return current
            }
        }
    }
    pop(){    // removes the last element from the list
        if (this.head===null){return}
        if(this.head.next===null){this.head=null}
        else{
        let current=this.head
        while(current.next.next!==null){
            current=current.next 
        }
        current.next=null
    }  
    this.size--
}
    contains(value) { //returns true if the passed in value is in the list and otherwise returns false.
        let current=this.head 
        while(current.next!==null){
            if(current.value===value){
                return true
            }
            else{
            current=current.next 
        }
        }
        return false
    } 
    find(value) {   //returns the index of the node containing value, or null if not found.
        let current=this.head 
        let index=0
        while(current.next!==null){
            if(current.value===value){
                return index
            }
        current=current.next 
        index++
    }
     return null
    }
    toString(){ //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += `(${current.value}) -> `;
            current = current.next;
        }

        result += "null";
        return result;
    }
    insertAt(value, index){ //that inserts a new node with the provided value at the given index.
        const newnode=new Node(value)
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if(index===0){
            newnode.next=this.head
            this.head=newnode
        }
        else{
            let current=this.head
            let i=0
            while(i<index-1){
                current=current.next 
                i++
            }

           
               newnode.next=current.next
               current.next=newnode
               this.size++
    }  
    this.size++
}

     removeAt(index){ //that removes the node at the given index.
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if (index===0){
            this.head=this.head.next
        }
        else{
            let current=this.head
            let i=0
            while(i<index-1){
                current=current.next 
                i++
            }
            current.next=current.next.next

        }
        this.size--
    
    }

}

export class Node{
    constructor(value){
        this.value=value 
        this.next=null
    }
}

