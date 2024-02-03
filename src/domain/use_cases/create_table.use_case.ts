
export interface CreateTableUseCase {
  execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}



export class CreateTable implements CreateTableUseCase {

  constructor(
    /**
     * DI - Dependency Injection
     */
  ){}

  execute({ base, limit = 10 }: CreateTableOptions){ //* Donde se ejecuta lo que queremos hacer con el caso de uso
    let outputMessage = '';
    console.time('CreateTable');
    
    // for (let i = 1; i <= limit; i++) {
    //   outputMessage += `${ base } x ${ i } = ${ base * i }`;
    //   if ( i < limit)
    //   outputMessage += '\n';
    // }
    
    let i = 1;
    while (i < limit){
      outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
      i++;
    }
    outputMessage += `${ base } x ${ i } = ${ base * i }`;
    
    return outputMessage;
  }

}

