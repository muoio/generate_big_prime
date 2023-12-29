
function inrange_1(d){
    return (0<=d && d<0.1) || (0.2<=d && d<0.3) || (0.5<=d && d<0.6) || (0.7<=d && d<0.8) || (0.9<=d && d<1) ? 1n:0n;
}
function generate_big_number(bit_length){
    let new_number = 0n;
    for(let i=0;i<bit_length-2;++i){
        let rand_value = Math.random();
        new_number = new_number*2n + inrange_1(rand_value);
    }
    new_number = new_number*4n + 3n;
    return new_number;
}
function power(x, y, p)
{
    let res = 1;
    x = x % p;
    while (y > 0)
    {
        if (y & 1)
            res = (res*x) % p;
        y = y>>1; 
        x = (x*x) % p;
    }
    return res;
}
 

function miillerTest(d, n)
{
    let a = 2 + Math.floor(Math.random() * (n-2)) % (n - 4);
    let x = power(a, d, n);
    if (x == 1 || x == n-1)
        return true;
    while (d != n-1)
    {
        x = (x * x) % n;
        d *= 2;
        if (x == 1)     
            return false;
        if (x == n-1) 
              return true;
    }
    return false;
}
 
function isPrime(n, k)
{
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;
    let d = n - 1;
    while (d % 2 == 0)
        d /= 2;
 
    for (let i = 0; i < k; i++)
        if (!miillerTest(d, n))
            return false;
 
    return true;
}
let q = generate_big_number(1024);
console.log(q);
console.log(q%4n);