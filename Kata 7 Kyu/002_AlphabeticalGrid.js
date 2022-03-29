// Task:
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

// Examples:
// grid(4)

// a b c d
// b c d e
// c d e f
// d e f g
// grid(10)

// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a"
// If function receive N < 0 should return:
// null


// ************************************************************************************************
// A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.
function grid(N) {
    const alpha ='abcdefghijklmnopqrstuvwxyz'.split('')
   let a=[];
      if(N<0){
        return null
    }else{
        for(let i=0;i<N; i++) {
            
                a.push(alpha.slice(i,N+i).toString().replace(/,/g,' '))
            
        }
        return a.toString().replace(/,/g,'\n')
        }
   
    //...
  }

  console.log(grid(19));

