import reverseString from '../code/reverseString'; 

test('single word reverse', () => {
    expect(reverseString('car')).toBe('rac'); 
    expect(reverseString('bank')).toBe('knab'); 
}); 

test('preserve case', () => {
    expect(reverseString('House')).toBe('esuoH'); 
    expect(reverseString('Bridge')).toBe('egdirB');
})

test('preserve space', () => {
    expect(reverseString('string with space')).toBe('ecaps htiw gnirts');
})

test('preserve punctuation', ()=> {
    expect(reverseString('Boom!')).toBe('!mooB');
})

test('blank string', () => {
    expect(reverseString('')).toBe(''); 
})