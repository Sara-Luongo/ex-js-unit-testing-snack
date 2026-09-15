const { getInitials, createSlug } = require("./esercizi-snack.js");

/* snack 1 */
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Sara Luongo')).toBe('SL')
});


/* snack 2 */
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Ciao A Tutti')).toBe('ciao a tutti')
});