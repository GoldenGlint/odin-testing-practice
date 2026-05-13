export function analyzeArray(arr){
    let sum=0;
    let min=arr[0];
    let max=arr[0];


    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        min=Math.min(min, arr[i]);
        max=Math.max(max, arr[i]);
    }

    
    const analyzedArray = {
      average: sum/arr.length,
      min: min,
      max: max,
      length: arr.length,
    };
    return analyzedArray;

}

