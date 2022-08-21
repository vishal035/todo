import { ObjectID } from 'bson';
import TodoInput from '../TodoInput/TodoInput';

// import { ClipboardListIcon } from '@heroicons/react/outline';
// <ClipboardListIcon className=" pl-2 text-green-400 w-10 " />

interface ITodo {
  id: string;
  todo: string;
}

const todoTempData: ITodo[] = [
  {
    id: new ObjectID().toString(),
    todo: 'This my First Temp Todo.',
  },
  {
    id: new ObjectID().toString(),
    todo: 'Second Todo.',
  },
  {
    id: new ObjectID().toString(),
    todo: 'Third Todo!',
  },
  {
    id: new ObjectID().toString(),
    todo: '⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡',
  },
  {
    id: new ObjectID().toString(),
    todo: 'alert("It has a bug")',
  },
];

const TodoList = () => {
  return (
    <div className="shadow-2xl  mx-8 mt-4 py-6 ">
      <ul className="flex flex-col items-center">
        <TodoInput />
        {todoTempData.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center px-4 py-2 w-4/6 rounded-sm my-2 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-green-300"
          >
            <span className="relative inline-block w-80">{todo.todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
