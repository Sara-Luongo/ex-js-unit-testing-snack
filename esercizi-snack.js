
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


function getInitials(stringa) {
    const nomeCompleto = [];
    const nomeInArray = stringa.split(" ")
    const nome = nomeInArray[0]
    const cognome = nomeInArray[1]

    nomeCompleto.push(nome.charAt(0))
    nomeCompleto.push(cognome.charAt(0))

    return nomeCompleto.join("")

};

function createSlug(string) {
    const symbols = "-?=)(/&%$£!"
    const stringAsArr = [...string]
    if (string === '' || stringAsArr.some(s => {
        return [...symbols].includes(s)
    })) {
        throw new Error("la stringa è vuota o non valida");

    }
    const sluggedString = string.replaceAll(" ", "-")
    return sluggedString.toLowerCase()
};

function avarage(arrayNum) {
    let somma = 0
    for (let i = 0; i < arrayNum.length; i++) {
        somma += arrayNum[i]
    }
    return somma / arrayNum.length
}

function isPalindrome(string) {
    for (let i = 0; i < string.length; i++) {
        const lastChar = string.length - 1 - i
        if (string[i] !== string[lastChar]) {
            return false
        }
    }

    return true
}
function findPostById(post, id) {
    return post.find(p => {
        return p.id === id
    })
}

module.exports = {
    getInitials,
    createSlug,
    avarage,
    isPalindrome,
    findPostById
}