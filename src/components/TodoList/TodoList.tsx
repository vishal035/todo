// import { ObjectID } from 'bson';
import { useState } from 'react';
import { ITodo } from '../../../Types/Interface';

// import { ClipboardListIcon } from '@heroicons/react/outline';
// <ClipboardListIcon className=" pl-2 text-green-400 w-10 " />

interface IPropsType {
  todos: ITodo[];
}

const TodoList = ({ todos }: IPropsType) => {
  function onClickTodoDOne(event: any) {
    // Get the status of Marked Done
    if (event.target.dataset.markedDone === 'true') {
      // if done: true  ==> change status to false
      event.target.classList.remove('line-through', 'line-through-green-400');

      //   todoTempData[updateTodo].done = false;
    }

    if (event.target.dataset.markDone === 'false') {
      // if done: false ==> change status to true
      event.target.classList.add('line-through', 'line-through-green-400');

      //   todoTempData[updateTodo].done = true;
    }
    console.log({
      key: event.target.dataset.key,
      done: event.target.dataset.markedDone,
      value: event.target.innerText,
    });
  }

  return (
    <div className="mx-8 mt-4 py-6 ">
      <ul className="flex flex-col items-center">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center px-4 py-2 w-4/6 rounded-sm my-2 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-green-300"
            onClick={onClickTodoDOne}
          >
            <span
              className={`relative inline-block w-80${
                todo.done ? ' line-through line-through-green-300' : ''
              }`}
              data-key={todo.id}
              data-marked-done={todo.done}
            >
              {todo.todo}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
