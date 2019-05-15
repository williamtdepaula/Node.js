const fatorial = (num) => {
    if (num === 0) {
        return 1
    }

    return num * fatorial(num - 1)
}

//***************FORMAS DE EXPORTAR********************

//exports.fatorial = fatorial //NÃO DEFAULT

/*module.exports = {//VÁRIAS FUNÇÕES
    fatorial: fatorial
    ...Outras funções
}*/
module.exports = fatorial //EXPORTA A FUNÇÃO COMO DEFAULT