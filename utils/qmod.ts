/**
 * 快速幂 x**a mod MOD
 * @param {bigint} x
 * @param {bigint} a
 * @param {bigint} MOD
 * @return {bigint}
 */
export const qmod = (x: bigint, a: bigint, MOD:bigint): bigint => {
    let res = 1n;
    x %= MOD; 
    while (a) {
        if (a & 1n) res = res * x % MOD;
        x = x * x % MOD;
        a >>= 1n;   
    }
    return res;  
};
// console.log(qmod(2n,5n,10000007n))