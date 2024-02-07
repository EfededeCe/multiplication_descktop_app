import { describe, test, expect, beforeEach, jest } from "@jest/globals";
// import { yarg }from "./args.plugins";

/**
 * Carga los argv que vienen y agrega manualmente otros para provarlos,
 * luego importa yarg de su archivo (para que no se ejecute antes de tener los nuevos args)
 * @param args 
 * @returns 
 */
const runCommand = async( args: string[] ) => {

  process.argv = [ ...process.argv, ...args ];

  // const defaultExport = await import('./args.plugins');
  // defaultExport.yarg
  const { yarg } = await import('./args.plugins');
  return yarg;

}

describe('Test args.plugins.ts', () => {

  const originalArgv = process.argv;
  beforeEach( () => {
    process.argv = originalArgv;
    jest.resetModules();
  })

  test('should return default values', async() => {
    const argv = await runCommand(['-b', '5']);
    console.log(argv);

    expect( argv ).toEqual( expect.objectContaining({
      b: 5,
      l: 10,
      s: false,
      n: 'multiplication_table',
      d: 'outputs',
    }));
  })

  test('should return configuration with custom values', async() => {

    const argv = await runCommand(['-b', '1', '-l', '30', '-s', 'true', '-n', 'tabla_de_multiplicar', '-d', 'salida']);
    console.log(argv);

    expect( argv ).toEqual( expect.objectContaining({
      b: 1,
      l: 30,
      s: true,
      n: 'tabla_de_multiplicar',
      d: 'salida',
    }));

  })

})

