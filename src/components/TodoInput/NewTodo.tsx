import React from 'react';
import { ITodo } from '../../../Types/Interface';
import TodoInputForm from './TodoInputForm';

interface IPropsType {
  addNewTodo: (todoData: ITodo) => void;
}

const TodoInput = ({ addNewTodo }: IPropsType) => {
  const onSaveTodoHandler = (todoData: ITodo) => {
    // console.log(todoData);
    addNewTodo(todoData);
  };
  return (
    <div className="flex items-center w-4/6 mx-auto mt-8 ">
      <TodoInputForm onSaveTodo={onSaveTodoHandler} />
    </div>
  );
};

export default TodoInput;
