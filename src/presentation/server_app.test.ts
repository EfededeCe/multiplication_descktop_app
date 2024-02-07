import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import { ServerApp } from './server_app';
import { CreateTable, CreateTableOptions } from "../domain/use_cases/create_table.use_case";
import { SaveFile, SaveFileOptions } from "../domain/use_cases/save_file.use_case";

describe('Server App', () => {

  beforeEach( () => {
    jest.clearAllMocks();
  })

  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    fileDestination: 'test_destination',
    fileName: 'test_filename',
  };

  test('should create ServerApp instance', () => {

    const serverApp = new ServerApp();
    expect( serverApp ).toBeInstanceOf( ServerApp );
    expect( typeof ServerApp.run ).toBe( 'function' );

  })

  /** Prueba de integración */
  test('should run ServerApp with options', () => {

    const logSpy = jest.spyOn(console, 'log');
    const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
    const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );


    ServerApp.run( options )

    expect( logSpy ).toHaveBeenCalledTimes( 3 );
    expect( logSpy ).toHaveBeenCalledWith( 'File created!!' );
    expect( logSpy ).toHaveBeenLastCalledWith( 'File created!!' );

    expect( createTableSpy ).toHaveBeenCalledTimes( 1 );
    expect( createTableSpy ).toHaveBeenCalledWith({ 
      'base': options.base,
      'limit': options.limit
    } );
    expect( saveFileSpy ).toHaveBeenCalledTimes( 1 );
    expect( saveFileSpy ).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileDestination: options.fileDestination,
      fileName: options.fileName
    });


    })

    /** Prueba unitaria */
    test('should run with custom values mocked', () => {

      const logMock      = jest.fn();
      const logErrorMock      = jest.fn();
      const createMock   = jest.fn((options: CreateTableOptions) => 'mocked string').mockReturnValue('1 x 2 = 2');
      const saveFileMock = jest.fn((options: SaveFileOptions) => true).mockReturnValue(true);

      console.log = logMock;
      console.error = logErrorMock;
      CreateTable.prototype.execute = createMock;
      SaveFile.prototype.execute    = saveFileMock;


      ServerApp.run( options );

      expect( logMock ).toHaveBeenCalledWith('File created!!')
      expect( createMock ).toHaveBeenCalledWith({"base": options.base, "limit": options.limit})
      expect( saveFileMock ).toHaveBeenCalledWith({
        fileContent: '1 x 2 = 2',
        fileDestination: options.fileDestination,
        fileName: options.fileName
      });

      expect( logMock ).toHaveBeenCalledWith('File created!!');
      expect( logErrorMock ).not.toHaveBeenCalled();

    })


})


