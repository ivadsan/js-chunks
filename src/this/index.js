let foo = 'xyz'

let bar = {
    foo: "abc",
    view: function(){
        console.log(this.foo) //si retira this está invocando foo del scope global
    }
    
}

bar.view()