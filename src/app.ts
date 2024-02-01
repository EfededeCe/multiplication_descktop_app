import { yarg } from "./plugins/args.plugins";
import { ServerApp } from "./presentation/server_app";


// console.log(process.env);
// console.log('argv\n',process.argv);

const [tsnode, app, ...args] = process.argv;

console.log('==========================');

// console.log(yarg);


(async() => {
  await main();
})();

async function main() {
  // console.log(yarg.b);
  // console.log(yarg.base);

  const { b:base, l: limit, s: showTable } = yarg;

  ServerApp.run( { base, limit, showTable } );
  
}
