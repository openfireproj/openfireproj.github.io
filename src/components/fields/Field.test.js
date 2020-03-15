import Field from './Field';


test('returns currency', () => {
    const field = Field('currency');
    expect(field.name).toBe('MoneyInput')
});

test('returns default', () => {
    const field = Field('default');
});
