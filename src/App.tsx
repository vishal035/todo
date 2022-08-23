import { useState } from 'react';
import { ITodo } from '../Types/Interface';
import TodoInput from './components/TodoInput/NewTodo';
import TodoList from './components/TodoList/TodoList';
import { Storage } from './utils/LocalStorage';

function App() {
  const [todos, setTodos] = useState(Storage.FetchData());
  // console.log(todos);
  const addNewTodoHandler = (todoData: ITodo) => {
    // console.log(todoData, todos);
    setTodos((prevState) => {
      Storage.SaveData([todoData, ...prevState]);
      return [todoData, ...prevState];
    });
  };

  const todoDoneHandler = (todoData: ITodo) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === todoData.id) {
        return {
          ...todo,
          done: todoData.done !== 'true' ? 'true' : 'false',
        };
      }
      return todo;
    });

    // console.log(updatedTodo);
    setTodos(updatedTodo);
    Storage.SaveData(updatedTodo);
  };

  return (
    <div className="conatiner w-screen h-screen bg-primary-white font-sans box-border">
      <section className="relative w-screen h-screen md:w-[80%] md:h-fit max-w-screen-sm  py-6 px-4 rounded-md shadow-2xl bg-white mx-auto top-20">
        <header className="w-fit mx-auto">
          <h1 className="text-3xl px-4 flex flex-row items-start text-gray-600 border-b-2 border-green-400 font-bold uppercase ">
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
