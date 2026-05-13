export function reverse(string){
    let ans="";
    for(let i=string.length-1; i>=0; i--){
        ans+=string[i];
    }
    return ans;
}