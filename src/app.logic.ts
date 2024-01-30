import fs from 'node:fs'
const msg: string = 'Hola Mundo';

console.log(msg);

const outputPath = 'outputs';

const writeInFile = ( num: number, arrNum: number[] ) => {
  //  const text = `${ num } x ${ i + 1 } = ${ e } \n`;
   let text: string = `
=================================\n
        Tabla del ${ num }\n
=================================\n
`;

if ( !fs.existsSync(`../${outputPath}`) )
  fs.mkdirSync(`../${outputPath}`, { recursive: true });
arrNum.forEach( ( e, i ) => {
  text += `${ num } x ${ i + 1 } = ${ e } \n`;
})

// if ( !fs.existsSync(`../outputs/`) && !fs.existsSync(`../outputs/table_${ num }.txt`) )
   fs.writeFileSync(`../outputs/table_${ num }.txt`, text);

  // if ( !fs.existsSync(`../table_${ num }.txt`) ){
    
  //     arrNum.forEach( ( e, i ) => {
  //       fs.writeFileSync('../table_5',`${ num } x ${ i + 1 } = ${ e } \n`);
  //     })

  // }

}

const multiplicate = ( num: number ) => {

  const table: number[] = [];

  for (let i = 1; i < 11; i++) {
    table.push(i * num);
  }

  table.forEach( (e, i) => console.log(`${ num } x ${ i + 1 } = ${ e }`));
  writeInFile(num, table);
}

multiplicate( 5 );
multiplicate( 1 );
