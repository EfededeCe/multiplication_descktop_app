import { CreateTable } from "../domain/use_cases/create_table.use_case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}


export class ServerApp {


  static run( {base, limit, showTable}: RunOptions){
    console.log('Server running');
    console.log( {base, limit, showTable} );

    const table = new CreateTable().execute({ base, limit}) ;

    showTable ? console.log(table) : '';

  };


}

