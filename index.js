/*
Given an array of Red Green Blue balls.You have to sort it. 
Constraint : Time complexity O(n) 
Constraint : Space complexity O(1) 
Example: 
Input: [R, G, B, G, G, R, B, B, G] 
Output : [B,B,B,G,G,G,G,R, R] 
 */

const exampleArray = ["R","G","B","G","G","R","B","B","G"]

const arrengeSequenceItems = (arr)=>{
    let start = 0 
    let mid = 0 
    let end = arr.length-1 
    while(mid <= end){
        if(arr[mid] ==="R"){
            [arr[mid], arr[end]] = [arr[end], arr[mid]]
            end--
        }else if(arr[mid] === "B"){
            [arr[start], arr[mid]] = [arr[mid], arr[start]]
            start++
            mid++
        }else{
            mid++
        }
    }
    return arr
}

const result = arrengeSequenceItems(exampleArray)
console.log(result)
