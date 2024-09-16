// 1. Create an Array of User Objects
const users = [
    {
        name: 'Alice',
        age: 25,
        hobbies: ['Reading', 'Hiking', 'Cooking']
    },
    {
        name: 'Bob',
        age: 30,
        hobbies: ['Gaming', 'Traveling', 'Swimming']
    },
    {
        name: 'Charlie',
        age: 35,
        hobbies: ['Cycling', 'Photography', 'Writing']
    }
];

// 2. Destructuring to extract properties from user objects and displaying them
users.forEach(user => {
    const { name, age } = user;  // Destructuring
    console.log(`Name: ${name}, Age: ${age}`);
});

// 3. Use Spread Operator to combine the hobbies arrays of all users
const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];

// Display the combined hobbies array
console.log('All Hobbies:', allHobbies);
