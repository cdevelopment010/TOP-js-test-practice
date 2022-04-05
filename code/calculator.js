export default function calculator(op, a, b) {

    switch (op) {
        case 'add':
            return a + b; 
        case 'subtract': 
            return a - b; 
        case 'multiply': 
            return a * b; 
        case 'divide': 
            return a / b; 
        default: 
            throw new Error();
    }
}