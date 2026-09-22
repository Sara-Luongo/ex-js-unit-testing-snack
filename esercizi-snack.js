
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