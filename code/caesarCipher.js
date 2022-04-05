export default function caesarCipher(str, offset) {
    let strArr = str.split(''); 
    for (let i = 0; i < strArr.length; i++) {
        if (/[a-z]/.test(strArr[i])) {
            let charCode = strArr[i].charCodeAt(0) - 97;
            let offsetCode = ((charCode + offset + 26) % 26 ) + 97;
            strArr[i] = String.fromCharCode(offsetCode);
        } else if (/[A-Z]/.test(strArr[i])) {
            let charCode = strArr[i].charCodeAt(0) - 65;
            let offsetCode = ((charCode + offset + 26) % 26 ) + 65;
            strArr[i] = String.fromCharCode(offsetCode);
        }
     }
    return strArr.join('');
}

// function caesarCipher(str, offset) {
//     let strArr = str.split(''); 
//     for (let i = 0; i < strArr.length; i++) {
//         if (/[a-z]/.test(strArr[i])) {
//             let charCode = strArr[i].charCodeAt(0) - 97;
//             let offsetCode = ((charCode + offset + 26) % 26 ) + 97;
//             strArr[i] = String.fromCharCode(offsetCode);
//         } else if (/[A-Z]/.test(strArr[i])) {
//             let charCode = strArr[i].charCodeAt(0) - 65;
//             console.log(charCode);

//         }
//      }
//     return strArr.join('');
// }

caesarCipher('attack',5);