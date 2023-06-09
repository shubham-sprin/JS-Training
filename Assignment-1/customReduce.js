/* 
        Create you own reduce method on Array.prototype.
        Contract same as native bind method -> Array.customReduce(reducerFn, initialValue); 
*/

Array.prototype.customReduce = function (reducerFn,initialValue){
    if(initialValue=== undefined && this.length==0){
        // Error case
        throw new Error();
    }
    let result= (initialValue===undefined?this[0]:initialValue);
    for(let iter=(initialValue===undefined?1:0);iter<this.length;iter++){
        result=reducerFn(result,this[iter])
    }
    return result
}

let arr=[1,2,5,4,7,3,6]
let initialValue=5;
let result=arr.customReduce((initialValue,currValue)=>initialValue+currValue,initialValue)
alert(result)