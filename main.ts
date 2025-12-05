const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const readline = async (): Promise<string> => (await iter.next()).value;
const stations:Station[] = [];
class Station {
    public idx:number;
    public to:Set<number>;
    constructor(idx:number, currentIdx:number, to:number[]) {
        this.idx = idx;
        this.to = new Set();
        while (to[currentIdx]) {
            this.to.add(to[currentIdx]);
            currentIdx++;
        }
    }
}
const solve = () => {

}
async function main() {
    const [nodes, links] = (await readline()).split(' ').map(Number);
    for (let i = 0; i < links; i++) {
        const temp = Number(await readline());
        const toStationList:number[] = (await readline()).split(' ').map(Number);
        for (let i=0;i<temp;i++) {
            
        }
    }
    solve();
}
main()
    .then((res) => console.log(res))
    .catch((err)=>console.log(err.message))
    .finally(() => rl.close());