import fs from 'node:fs'
import { yarg } from './plugins/args.plugins';
import path from 'node:path';


const outputPath = 'outputs';
const directoryOutputs = path.join(__dirname, '..', outputPath);

const writeInFile = ( base: number, arrNum: number[] ) => {
  
  let text: string = `
=================================\n
        Tabla del ${ base }\n
=================================\n
`;

  if ( !fs.existsSync(`${directoryOutputs}`) )
    fs.mkdirSync(directoryOutputs, { recursive: true }); // recursive puedo pasar en el path anidación de directorios

  arrNum.forEach( ( e, i ) => {
    text += `${ base } x ${ i + 1 } = ${ e } \n`;
  })

  fs.writeFileSync(`${directoryOutputs}/table_${ base }.txt`, text);

  return text;

}

const multiplicate = ( base: number, limit: number, showTable: boolean ) => {

  const table: number[] = [];

  for (let i = 1; i <= limit; i++) {
    table.push(i * base);
  }

  const text = writeInFile(base, table);  
  showTable.valueOf() ? console.log(text): '';
  
}


const { b: base, l: list, s: showTable } = yarg;

multiplicate( base, list, showTable );
