const funcs = []
for(let i = 0; i < 10; i ++){ // Pelo fato de ter escopo de bloco o valor de 'i' será lembrada 
    funcs.push(function(){
        console.log(i)
    })
}
funcs [2] ()
funcs [6] ()
funcs [8] ()
 