const { getInitials, createSlug, avarage, isPalindrome, findPostById } = require("./esercizi-snack.js");

const posts = [
    {
        id: 1,
        title: "Come iniziare a programmare da zero",
        slug: "come-iniziare-a-programmare-da-zero"
    },
    {
        id: 2,
        title: "Le basi di JavaScript",
        slug: "le-basi-di-javascript"
    },
    {
        id: 3,
        title: "Guida alla creazione di un sito web",
        slug: "guida-alla-creazione-di-un-sito-web"
    },
    {
        id: 4,
        title: "Cos'è un'API e come funziona",
        slug: "cose-un-api-e-come-funziona"
    },
    {
        id: 5,
        title: "Introduzione a React",
        slug: "introduzione-a-react"
    },
    {
        id: 6,
        title: "Come migliorare le proprie competenze di sviluppo",
        slug: "come-migliorare-le-proprie-competenze-di-sviluppo"
    }
];

/* snack 1 */
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Sara Luongo')).toBe('SL')
});


// /* snack 2 */
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Ciao A Tutti')).toBe('ciao-a-tutti')
});


/* snack 3 */
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(avarage([4, 4, 8, 7, 9])).toBe(6.4)
});

/* snack 4 */
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug('Ciao Tutto Bene')).toBe('ciao-tutto-bene')
});


/* snack 5 */
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('osso')).toBeTruthy()
});

/* snack 6 */
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('')).toThrow()
});
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug('ciao??')).toThrow()
});

/* snack 7 */

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: "Le basi di JavaScript",
        slug: "le-basi-di-javascript"
    },)
});