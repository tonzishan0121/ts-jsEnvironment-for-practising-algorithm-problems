const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const readline = async (): Promise<string> => (await iter.next()).value;
let _map: Array<Array<number>>;
const solve = () => {

}
async function main() {
    const [node, way, start] = (await readline()).split(' ').map(Number);
    _map = Array.from({ length: node + 1 }, () => Array.from({ length: node + 1 }, () => Infinity));
    for (let i = 0; i < way; ++i) {
        const [from, to] = (await readline()).split(' ').map(Number);
        _map[from][to] = 1; _map[to][from] = 1;
        for (let i = 1; i < way; i++) {
            if (Number.isInteger(_map[from][i])) {
                let dist = Math.min(_map[to][i], _map[from][i] + 1);
                _map[to][i] = dist;
                _map[i][to] = dist;
            }
            if (Number.isInteger(_map[to][i] > 0)) {
                let dist = Math.min(_map[from][i], _map[to][i] + 1);
                _map[from][i] = dist;
                _map[i][from] = dist;
            }
        }
    }
    let res = [];
    for (let i = 1; i <= node; i++) {
        if (_map[start][i] === Infinity) res.push(-1)
        else res.push(_map[start][i]);
    }
    res[start-1] = 0;
    return res
}
main()
    .then((res) => console.log(...res))
    .catch((err) => console.log(err.message))
    .finally(() => rl.close());