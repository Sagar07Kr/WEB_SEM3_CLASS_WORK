
function fact(n){
    let ans=1;
    for(let i=1;i<=n;i++)ans*=i;
    return ans;
}

function memoize(fn){
    let cashe={};

    return function(n){
        if(cashe[n]){
            return cashe[n];
        }
        let ans=fn(n);
        return cashe[n]=ans;
    }
}

let myFact=memoize(fact);
console.log(myFact(5));//by calculation
console.log(myFact(5));//by cashe

