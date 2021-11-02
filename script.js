let obj = {      //Это обьект с глубокой вложенностью
    a: 1,
    b: 3,
    c: {
        value: 'text',
        value2: 500,
    }
}

let arr = [123,    //это массив данных
    "some text...",
    [1,2,3],
    {"age":33},
    true,
    null
];

// спарсить текст в новый обьект/массив(превратьть в текстJSON)
let newObjCopy = JSON.parse(JSON.stringify(obj));
let newArrCopy = JSON.parse(JSON.stringify(arr));

console.log(obj);
console.log(newObjCopy);
console.log(arr);
console.log(newArrCopy);
// тут я присвоил исходному обьекту глубокое значение для проверки новой копии"
obj.c.value = 'new text';

