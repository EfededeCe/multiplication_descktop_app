import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import { ServerApp } from './presentation/server_app';

describe('Test App.ts', () => {

  test('should call ServerApp.run with values', async() => {

    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test_file', '-d', 'test_destination'];

    await import('./app');

    expect( ServerApp.run ).toHaveBeenCalledWith({
      base: 10,
      limit: 5,
      showTable: true,
      fileName: 'test_file',
      fileDestination: 'test_destination'
    });

  });


})

