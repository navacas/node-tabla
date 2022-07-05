
const fs = require('fs');
const colors = require('colors');

const createFileTable = async( base = 6, listar = false, hasta = 10) => {
    try {
        let suma = 0;

        let exitTable = '';

        for (let index = 1; index <= hasta; index++) {
            suma = base * index;
            exitTable += `${base} x ${index} = ${suma}\n`;
            
        }
        if(listar){
            console.log(exitTable);
        }
        


        fs.writeFileSync( `./salida/table-${base}.txt`, exitTable);

        return `table-${base}.txt`;
    } catch (err) {
        throw err;
    }
    

}

module.exports = {
    createFileTable
}







