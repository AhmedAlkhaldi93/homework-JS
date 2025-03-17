// shallow copy

let original = { name: "Ali", info: { age: 25 } };

let shallowCopy = { ...original }; // أو Object.assign({}, original)

shallowCopy.name = "Omar"; // تغيير الاسم فقط - لا يؤثر على الأصلي
shallowCopy.info.age = 30; // يؤثر على الأصلي لأن المرجع نفسه نُسخ!

console.log(original.info.age); // 30 (تم التعديل على الكائن الأصلي)
console.log(original.name);
console.log(shallowCopy.info.age);
console.log(shallowCopy.name);


console.log("-------------------------");
// Deep copy
let original2 = { name: "Ali", info: { age: 25 } };
let deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.info.age = 30; // لن يؤثر على الأصلي
deepCopy.name = "Ahmed"; 

console.log(original2.info.age); // 25 (يبقى كما هو)
console.log(original2.name);
console.log(deepCopy.info.age);
console.log(deepCopy.name);