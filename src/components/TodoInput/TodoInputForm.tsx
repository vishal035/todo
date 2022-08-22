import { ObjectID } from 'bson';
import React, { useState } from 'react';
import { ITodo } from '../../../Types/Interface';
import Notification from '../Notification/Notification';

interface IPropsType {
  onSaveTodo: (data: ITodo) => void;
}

const TodoInputForm = ({ onSaveTodo }: IPropsType) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [isValid, setIsValid] = useState(true);
  let timer: NodeJS.Timeout;

  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    console.log(timer);

    const newTodo = {
      id: new ObjectID().toString(),
      todo: enteredTodo,
      done: false,
    };

    if (enteredTodo.length === 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsValid((prevState) => true);
      }, 1500);
      return setIsValid(false);
    }

    // console.log(newTodo);
    setEnteredTodo('');
    onSaveTodo(newTodo);
  };

  const inputChangeHandler = (event: any) => {
    setEnteredTodo(event.target.value);

    // console.log(event.target.value);
  };
  return (
    <form className="relative w-full" onSubmit={formSubmitHandler}>
      <input
        onChange={inputChangeHandler}
        className="text-black block px-4 w-full py-2 ml-2 border-2 rounded-sm hover:border-black transition-all ease-in-out"
        id="todo"
        type={'text'}
        value={enteredTodo}
        placeholder={'Enter Task/ Just Testing...'}
      />
      {!isValid && (
        <Notification message={`That's same as doing nothing important 🤔`} />
      )}
    </form>
  );
};

export default TodoInputForm;
