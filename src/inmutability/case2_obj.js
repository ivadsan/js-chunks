const obj1 = {
    name: "test",
    fn: function(){
        console.log('test')
    },
    skills:{
        frontend: 'react',
        backend: 'java'
    },
}

console.log('obj1', obj1)

const obj1_str = JSON.stringify(obj1)

const obj2 = JSON.parse(obj1_str)

obj2.skills.backend = "node"

console.log('obj2', obj2)