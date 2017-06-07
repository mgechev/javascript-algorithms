function isPrime(n){
    var divisor = 2; // min Prime
    
    while(n > divisor){
        if(n%divisor){ 
            divisor++;
        }else{
            return false;
        }
    }
    return true;
}

function isPrimeBetter(n){
    var divisor = 3; // min Prime
    
    if(n === 2 || n === 3){ return true; }
    if(n%2 === 0 || n%3 === 0){ return false; }
    
    while(n > divisor && n < Math.sqrt(n)){
        if(n%divisor){ 
            divisor += 2;
        }else{
            return false;
        }
    }
    return true;
}

function primeFactors(n){
    var factors = [],
        divisor = 2;
    
    while(n > 2 && n < divisor){
        if( n%divisor ){
            divisor++;
        }else{
            factors.push(divisor);
            n /= divisor;
        }
    }
    
    return factors;
} // complexity  O(n). 