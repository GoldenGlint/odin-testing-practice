export function caesarCipher(string, shift){
    let result="";
    for(let i=0; i<string.length; i++){
        if(string[i].match(/[a-z]/)){
            const newIndex=(string[i].charCodeAt(0)-97+shift)%26;
            result+=String.fromCharCode(newIndex+97);
        }
        else if(string[i].match(/[A-Z]/)){
            const newIndex=(string[i].charCodeAt(0)-65+shift)%26;
            result+=String.fromCharCode(newIndex+65);

        }
        else{
            result+=string[i];
        }
        
    }
    return result;
}