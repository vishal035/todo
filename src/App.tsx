import { ObjectID } from 'bson';
import { useState } from 'react';
import { ITodo } from '../Types/Interface';
import TodoInput from './components/TodoInput/NewTodo';
import TodoList from './components/TodoList/TodoList';

const todoTempData: ITodo[] = [
  {
    id: new ObjectID().toString(),
    todo: 'This my First Temp Todo.',
    done: false,
  },
  {
    id: new ObjectID().toString(),
    todo: 'Second Todo.',
    done: false,
  },
  {
    id: new ObjectID().toString(),
    todo: 'Third Todo!',
    done: false,
  },
  {
    id: new ObjectID().toString(),
    todo: '⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡',
    done: false,
  },
  {
    id: new ObjectID().toString(),
    todo: 'alert("It has a bug")',
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useState(todoTempData);

  const addNewTodoHandler = (todoData: ITodo) => {
    // console.log(todoData, todos);
    setTodos((prevState) => {
      console.log(prevState);
      return [...prevState, todoData];
    });
  };

  const todoDoneHandler = (todoData: ITodo) => {
    if (String(todoData.done) === 'true') {
      console.log('Todo is done Marked');
      const updateTodo = { ...todoData, done: false };

      const todoToUpdate = todos.findIndex((todo) => todo.id === todoData.id);
      // console.log(todoToUpdate);
      setTodos((prevState) => {
        return [...prevState, updateTodo];
      });
    }

    if (String(todoData.done) === 'false') {
      console.log('Todo is notdone Marked');
      const todoToUpdate = todos.findIndex((todo) => todo.id === todoData.id);
      console.log(todoToUpdate);
    }
  };

  return (
    <div className="conatiner w-screen h-screen bg-primary-white font-sans">
      <section className="relative w-[60%] h-fit py-6 px-4 rounded-md shadow-2xl bg-white mx-auto top-20">
        <header className="w-fit mx-auto">
          <h1 className="text-3xl px-4 flex flex-row items-start text-black border-b-2 border-green-400 font-bold uppercase ">
            Todo App
          </h1>
        </header>
        <main>
          <TodoInput addNewTodo={addNewTodoHandler} />
          <TodoList todos={todos} onTodoDone={todoDoneHandler} />
        </main>
      </section>
    </div>
  );
}

export default App;
