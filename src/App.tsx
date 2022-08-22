import { ObjectID } from 'bson';
import { useState } from 'react';
import { ITodo } from '../Types/Interface';
import TodoInput from './components/TodoInput/NewTodo';
import TodoList from './components/TodoList/TodoList';

const todoTempData: ITodo[] = [
  {
    id: new ObjectID().toString(),
    todo: 'Just Start Add Temp Todos.',
    done: 'false',
  },
  {
    id: new ObjectID().toString(),
    todo: 'Done Todos.',
    done: 'true',
  },
];

function App() {
  const [todos, setTodos] = useState(todoTempData);
  // console.log(todos);
  const addNewTodoHandler = (todoData: ITodo) => {
    // console.log(todoData, todos);
    setTodos((prevState) => {
      return [todoData, ...prevState];
    });
  };

  const todoDoneHandler = (todoData: ITodo) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === todoData.id) {
        // console.log({
        //   ...todo,
        //   done: todoData.done !== 'true' ? 'true' : 'false',
        // });
        return {
          ...todo,
          done: todoData.done !== 'true' ? 'true' : 'false',
        };
      }
      return todo;
    });

    // console.log(updatedTodo);
    setTodos(updatedTodo);
  };

  return (
    <div className="conatiner w-screen h-screen bg-primary-white font-sans box-border">
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
