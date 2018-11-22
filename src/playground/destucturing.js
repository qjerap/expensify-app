
// Objet Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };


// const { name, age } = person;
// console.log(`${name} is ${age}.`)


// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}`);

// const book = {
//     title: 'Ego is te Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };


// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);


// Array Destructuring

// const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];


// const [, city, state = 'New York'] = adress;
// console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];
const [beverage,, mediumPrice] = item;
console.log(`A medium ${beverage} costs ${mediumPrice}`);