class NodeList{
     constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
     }}


export class HashMap{
      constructor(loadfactor=0.8,capacity=12){
        this.loadfactor=loadfactor
        this.capacity=capacity    //total number of buckets
        this.size=0 //number of key/value pairs in the hashmap
        this.bucket=new Array(this.capacity).fill(null) //create empty array of linked lists
      }                                          
      hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
     
        return hashCode;
      } 
      set(key,value){
         console.log(`setting:${key} with ${value}`)
         const hashcode= this.hash(key) //get the hash index
         const bucket=this.bucket[hashcode] //access the specific bucket at the index
         //check if the bucket is empty (no collisions)
         if(!bucket){
           this.bucket[hashcode]=new NodeList(key,value)
           this.size++
         }
         else{
            let current=bucket
            while(current!==null){
                if(current.key===key){
                    current.value=value;
                    return;
                }
                if (!current.next) break; // Stop at the last node
                current=current.next 
            }
            current.next = new NodeList(key, value);
            this.size++
         }
        
      if(this.size/this.capacity>this.loadfactor){
       this.resize()
       }
}
      resize(){
          const oldbuckets=this.bucket
           this.capacity*=2
           this.bucket=new Array(this.capacity).fill(null)
           this.size=0
           for(const oldbucket of oldbuckets){
              
                let current=oldbucket
                while(current!==null){
                   this.set(current.key,current.value)
                    current=current.next 
            }
        
        
           
           }
      }
      get(key){  //takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
         const hashcode=this.hash(key)
         const current=this.bucket[hashcode] 
         while(current!==null){
            if(current.key===key){
               return current.value
            }
            current=current.next
         

      }
      return null
    }
    has(key){ //takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
        return this.get(key) !== null; // If `get` returns a value, key exists
    }
    remove(key){
        const hashcode=this.hash(key)
        const bucket=this.bucket[hashcode] 
        if(!bucket){return false}
        if(bucket.key===key){
            this.bucket[hashcode]=bucket.next 
            this.size--
            return true
        }
        let current=bucket
        while(current.next!==null){
            if(current.next.key===key){
                current.next=current.next.next
                this.size--
                return true
            }
            current=current.next
        }
        return false
        
}
     length(){  //returns the number of stored keys in the hash map.
      return this.size
 }
 
     clear() { //removes all entries in the hash map.
        this.bucket = new Array(this.capacity).fill(null); // Reset buckets to empty
        this.size = 0; // Reset the size counter
}

     keys(){
        const keyss=[]
        for( const bucket of this.bucket){
            let current=bucket
            while(current!==null){
                if(current.key){keyss.push(current.key)}
                current=current.next
            }
        }
        return keyss

     }
     values(){
        const valuess=[]
        for( const bucket of this.bucket){
            let current=bucket
            while(current!==null){
                if(current.value){valuess.push(current.value)}
                current=current.next
            }
        }
        return valuess
     }
     entries(){
         const entriess=[]
         for( const bucket of this.bucket){
            let current=bucket
            while(current!==null){
               
                if(current.key && current.value){entriess.push({key:current.key,value:current.value})}
                current=current.next
            }

     }
     return entriess
}
}
