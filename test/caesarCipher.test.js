import caesarCipher from "../code/caesarCipher";

test('lowercase single word', () => {
    expect(caesarCipher('attack', 5)).toBe('fyyfhp'); 
})

test('uppercase single word', () => {
    expect(caesarCipher('ATTACK', 5)).toBe('FYYFHP'); 
})
test('mixed case single word', () => {
    expect(caesarCipher('Attack', 5)).toBe('Fyyfhp'); 
})

test('mixed case multiple words', () => {
    expect(caesarCipher('Attack Attack', 5)).toBe('Fyyfhp Fyyfhp'); 
})

test('lowercase single word with special character', () => {
    expect(caesarCipher('attack!', 5)).toBe('fyyfhp!'); 
})
