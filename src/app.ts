import { yarg } from "./plugins/args.plugins";
import { ServerApp } from "./presentation/server_app";

/**
 * Ejecución de main con todas sus dependencias
 */
(async() => {

  await main();

})();


async function main() {
  
  const { b:base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;

  ServerApp.run( { base, limit, showTable, fileName, fileDestination } );
  
}
