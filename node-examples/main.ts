import {fatorial} from './fatorial'

const argv = require('yargs').demandOption('num').argv//num é o parametro, argv é o array de paramentros
//node main.js --num=6 NUM É O PARAMENTRO

console.log('\nn-fatorial')

/*console.log(`\nExecutando o script a partir do diretório ${process.cwd()}`)

process.on('exit', ()=>{
    console.log('script está prestes a terminar')
})*/

//console.log(process.argv) pega todos os argumentos que foram digitados quando executou o script no cmd

//SEM YARGS
//const num = parseInt(process.argv[2])//PEGANDO O SEGUNDO ARGUMENTO

//COM YARGS
const num = argv.num

console.log(`\nO fatorial de ${num} é igual a ${fatorial(num)}\n`)