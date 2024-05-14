// Case 1
const obj1 = {
    id: 1,
    name: 'Ivan',
    skills:{
        frontend: 'react',
        backend: 'java'
    },
    fn: function(){
        console.log('test')
    }
}

const obj2 = {...obj1}
const obj3= {...obj1}
obj3.skills = {...obj1.skills}


obj2.skills.backend = 'node'

obj2.name = 'Dario'


console.log('obj1', obj1)
console.log('obj2', obj2)
console.log('obj3', obj3)

obj3.fn()



