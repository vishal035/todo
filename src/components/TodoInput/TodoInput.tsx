import React from 'react';

const TodoInput = () => {
  return (
    <div className="flex items-center w-fit mx-auto mt-4 ">
      <label htmlFor="todo">Enter Task:</label>
      <input
        className="text-black block px-4 py-2 ml-2 border-2 rounded-sm hover:border-black transition-all ease-in-out"
        id="todo"
        type={'text'}
        placeholder={'Just Testing...'}
      />
    </div>
  );
};

export default TodoInput;
