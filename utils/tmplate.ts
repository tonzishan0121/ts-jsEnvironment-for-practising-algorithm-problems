const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const readline = async (): Promise<string> => (await iter.next()).value;

const solve = () => {

}
async function main() {
    solve();
}
main()
    .then(console.log)
    .catch((err)=>console.log(err.message))
    .finally(() => rl.close());