export const factorial = (n:bigint, MOD:bigint):bigint=>{
    return n<=1?1n:(n*factorial(n-1n, MOD)%MOD);
}