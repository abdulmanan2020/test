const a1=[1,2,3,4];
const a2=[5,6,7,8];


let newarray=[...a1,...a2,89];
console.log(newarray)


// in object

const obj1={
key1:"value1",
key2:"value2",

}

const obj2={
    key3:"value3",
    key4:"value4",
    
    }

    const newobj={...obj1,...obj2,obj3:"adnan"};
   console.log(newobj)