function fibonacci(n){
    if (n<2){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}


function fibs(n){
    let array=[]
    array.length=n
    array[0]=0                                                     //example: f(5)=[0,1,1,2] 1+2=3                                 
    array[1]=1
    for (let i=2;i<n;i++){                                            //prev=[0,1,1,2]=f(4)  
        array[i]=array[i-1]+array[i-2]
    }                                                                  //prev[prev.length - 1]=2  prev[prev.length - 2]=1
    return array
}
function fibsRecurse(n){
    if (n === 0) return [];
    if (n === 1) return [0];                               
    if (n === 2) return [0, 1];                                 
    const prev = fibsRecurse(n - 1); // Recursive call     
    return [...prev, prev[prev.length - 1] + prev[prev.length - 2]]; // Add next Fibonacci number
}
