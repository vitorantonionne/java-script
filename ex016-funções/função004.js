function fatorial(n){
    let fat = 1
    for (let c = n ; c > 1 ; c--) {
        fat *= c 
        // fat = 1 x 5
        // 5 = 5 x 4
        // 20 = 20x3
        // 60 = 60 x2
        // 120 = 120x1
    }
    return fat
}

console.log (fatorial(5))


// fatorial 5 x 4 x 3 x 2 x 1