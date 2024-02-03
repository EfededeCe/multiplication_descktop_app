import { describe, test, expect, afterEach, beforeEach, jest } from "@jest/globals";
import { SaveFile, SaveFileOptions } from './save_file.use_case';
import fs from "node:fs";
import { options } from "yargs";


describe('SaveFilesUseCase', () => {

  // beforeEach( () => {
  //   fs.existsSync('outputs') ? fs.rmSync('outputs', { recursive: true }) : '';
  //   fs.existsSync('custom_outputs') ? fs.rmSync('custom_outputs', { recursive: true }) : '';
  // })

  beforeEach(() => {
    jest.clearAllMocks();
  })

  afterEach( () => {
    // clean up
    fs.existsSync('outputs') ? fs.rmSync('outputs', { recursive: true }) : '';
    fs.existsSync('custom_outputs') ? fs.rmSync('custom_outputs', { recursive: true }) : '';
  })


  const customOptions = [{
    fileContent: 'Custom content',
    fileDestination: 'custom_outputs',
    fileName: 'custom_table_name'
  },
  {
    fileContent: 'Custom content',
    fileDestination: 'custom_outputs'
  }]


  test('should save files with default values', () => {

    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options: SaveFileOptions = {
      fileContent: 'test content',
    }
    const result = saveFile.execute( options );
    const fileExist = fs.existsSync( filePath );
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    
    expect( result ).toBeTruthy();
    expect( fileExist ).toBeTruthy();
    expect( fileContent ).toBe( options.fileContent );

  })

  test('should save files with custom values', () => {


    const saveFile      = new SaveFile();
    const wasSaved2Opts = saveFile.execute( customOptions[0] );
    const wasSaved3Opts = saveFile.execute( customOptions[1] );
    const filePath1     = `${ customOptions[0].fileDestination }/${ customOptions[0].fileName}.txt`;
    const filePath2     = `${ customOptions[1].fileDestination }/table.txt`;
    const wasSaved      = fs.existsSync(filePath1);
    const wasSaved1     = fs.existsSync(filePath2);

    expect( wasSaved2Opts ).toBeTruthy()
    expect( wasSaved3Opts ).toBeTruthy()
    expect( wasSaved1 ).toBeTruthy()
    expect( wasSaved ).toBeTruthy()

  })


  test('should return false if directory could not be created', () => {

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing') }
    )

    const result = saveFile.execute( customOptions[0] );

    expect( result ).toBeFalsy();

    mkdirSpy.mockRestore(); // Restaura la función original

  })

  test('should return false if file could not be created', () => {

    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing') }
    )

    const result = saveFile.execute( { fileContent: 'Hola' } );

    expect( result ).toBeFalsy();

    writeFileSpy.mockRestore();

  })



})

