//const fs = require('fs') sem ser EcmaScript 2015
import * as fs from 'fs' //Com EcmaScript 2015
import * as yargs from 'yargs'

const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(argv.filename, argv.content, (error) => {
    if (error) throw error//Para a execução do script
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso`)
})
