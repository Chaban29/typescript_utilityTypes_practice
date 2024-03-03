"use strict";
const updateTodo = (todo, fieldsToUpdate) => {
    return {
        ...todo,
        ...fieldsToUpdate,
    };
};
const myTodo = {
    title: 'Todo',
    description: 'Todo text',
};
const todo = updateTodo(myTodo, {
    title: 'new Todo title',
    description: 'throw out trash',
});
console.log(todo);
const obj = { a: 5 };
const newObj = { a: 10, b: 20 };
const user = {
    name: 'Roman',
    age: 23,
};
const cats = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
};
