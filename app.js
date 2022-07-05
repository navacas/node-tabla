
const { createFileTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// const [,,arg3 = 'num=6'] = process.argv;
// const [ , num = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);


// const num = 7;

createFileTable(argv.b, argv.l, argv.h)
    .then( fileName => console.log(fileName.rainbow, 'creado'.blue))
    .catch( err => console.log(err));
