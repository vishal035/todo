// import { ObjectID } from 'bson';
import { useState } from 'react';
import { ITodo } from '../../../Types/Interface';

// import { ClipboardListIcon } from '@heroicons/react/outline';
// <ClipboardListIcon className=" pl-2 text-green-400 w-10 " />

interface IPropsType {
  todos: ITodo[];
  onTodoDone: (updatedTodoData: ITodo) => void;
}

const TodoList = ({ todos, onTodoDone }: IPropsType) => {
  const onClickTodoDOne = (event: any) => {
    // console.log({
    //   id: event.target.dataset.key,
    //   todo: event.target.innerText,
    //   done: event.target.dataset.markedDone,
    // });
    onTodoDone({
      id: event.target.dataset.key,
      todo: event.target.innerText,
      done: event.target.dataset.markedDone,
    });
  };

  return (
    <div className="mx-8 mt-4 py-6 ">
      <ul className="flex flex-col items-center">
        {todos.map((todo) => (
          <li
            onClick={onClickTodoDOne}
            key={todo.id}
            className="flex items-center px-4 py-2 w-4/6 rounded-sm my-2 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-green-300"
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
