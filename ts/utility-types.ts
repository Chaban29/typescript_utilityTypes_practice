interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return {
    ...todo,
    ...fieldsToUpdate,
  };
};

const myTodo: Todo = {
  title: 'Todo',
  description: 'Todo text',
};

const todo = updateTodo(myTodo, {
  title: 'new Todo title',
  description: 'throw out trash',
});

console.log(todo);

// Required

interface Props {
  a?: string | number;
  b?: string | number;
}

const obj: Props = { a: 5 };

const newObj: Required<Props> = { a: 10, b: 20 };

//  Readonly

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'Roman',
  age: 23,
};

// Record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

