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
    return string.toLowerCase()
};


module.exports = {
    getInitials,
    createSlug
}