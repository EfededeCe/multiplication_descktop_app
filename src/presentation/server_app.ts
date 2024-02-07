import { CreateTable } from "../domain/use_cases/create_table.use_case";
import { SaveFile } from "../domain/use_cases/save_file.use_case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}


export class ServerApp {


  static run( {base, limit, showTable, fileName, fileDestination}: RunOptions){
    console.log('Server running');
    console.log( {base, limit, showTable, fileName, fileDestination} );

    const table       = new CreateTable().execute({ base, limit});
    const wasCreated  = new SaveFile()
      .execute({ fileContent: table, fileDestination: fileDestination, fileName: fileName });

    showTable ? console.log(table) : '';

    wasCreated
      ? console.log('File created!!')
      : console.error('File not created');

  };


}

