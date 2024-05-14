// Crear una función que reciba un string y cuente cuantas vocales tiene de cada una

const foo = (word) => {

    const vocals = ['a', 'e' , 'i', 'o', 'u']


    const wordArr = word.split('')
    const result = {
        a: 0, e: 0, i:0, o: 0, u:0
    }

    if(wordArr.length>0){

        wordArr.map((char)=>{
            const validation = vocals.includes(char)

            if(validation){
                result[char] = result[char] + 1
            }
        })
    }

    const newResult = {}
    vocals.map((res)=> {
        if (result[res] > 0){
            newResult[res] = result[res]
        }
    })


    console.log(newResult)

} 


foo('example')