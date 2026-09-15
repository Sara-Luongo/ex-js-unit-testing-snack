const { getInitials, createSlug, avarage } = require("./esercizi-snack.js");

// /* snack 1 */
// test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
//     expect(getInitials('Sara Luongo')).toBe('SL')
// });


// /* snack 2 */
// test('La funzione createSlug restituisce una stringa in lowercase.', () => {
//     expect(createSlug('Ciao A Tutti')).toBe('ciao a tutti')
// });


/* snack 3 */
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(avarage([4, 4, 8, 7, 9])).toBe(6.4)
});

/* snack 4 */
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Ciao Tutto Bene')).toBe('ciao-tutto-bene')
});