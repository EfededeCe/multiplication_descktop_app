import { yarg } from "./plugins/args.plugins";


console.log(process.env);
console.log('argv\n',process.argv);

const [tsnode, app, ...args] = process.argv;

console.log('==========================');

console.log(yarg);


(async() => {
  await main();
})();

async function main() {
  console.log(yarg.b);
  console.log(yarg.base);
  
}
