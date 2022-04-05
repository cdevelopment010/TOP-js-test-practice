import capitalise from '../code/capitalise'; 

test('lowercase to propercase', () => {
    expect(capitalise('tomato')).toBe('Tomato'); 
    expect(capitalise('apples')).toBe('Apples'); 
})

test('uppercase to propercase', () => {
    expect(capitalise('STONE')).toBe('Stone'); 
    expect(capitalise('TABLE')).toBe('Table');
})