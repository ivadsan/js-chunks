var foo = 1;

(function(){
	console.log(foo)
	var foo = 4
	var baz = 2
	bar = 5
})()

console.log(foo);
console.log(bar);
console.log(baz);


// variables with the same name in diferent block scopes


let foo = "abc"

if(true){
    let foo = "def"
    console.log(foo) // def
}

console.log(foo) // abc



const foo = "abc"

if(true){
    const foo = "def"
    console.log(foo) // def
}

console.log(foo) // abc