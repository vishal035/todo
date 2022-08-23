import React from 'react';
import { ITodo } from '../../../Types/Interface';
import TodoDelete from '../TodoDelete/TodoDelete';

interface IPropsType {
  todo: ITodo;
  onTodoClick: (event: any) => void;
  deleteTodoEvent: (id: string) => void;
}

const ListItems = ({ todo, onTodoClick, deleteTodoEvent }: IPropsType) => {
  const todoDeleteHandler = (id: string) => {
    deleteTodoEvent(id);
  };

  return (
    <>
      <li
        data-key={todo.id}
        data-marked-done={todo.done}
        className={`relative flex flex-row items-center text-gray-600 box-border px-4 py-2 my-4 w-full rounded-sm ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-green-300${
          todo.done.toLowerCase() === 'true'
            ? ' line-through line-through-green-300'
            : ''
        }`}
        onClick={onTodoClick}
      >
        {todo.todo}
        <TodoDelete id={todo.id} deleteById={todoDeleteHandler} />
      </li>
    </>
  );
};

export default ListItems;
