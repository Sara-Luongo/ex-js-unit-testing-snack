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

module.exports = {
    getInitials,
    createSlug,
    avarage
}