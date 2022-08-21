import React from 'react';

const TodoInput = () => {
  return (
    <div className="flex items-center w-4/6 mx-auto mt-8 ">
      <input
        className="text-black block px-4 w-full py-2 ml-2 border-2 rounded-sm hover:border-black transition-all ease-in-out"
        id="todo"
        type={'text'}
        placeholder={'Enter Task/ Just Testing...'}
      />
    </div>
  );
};

export default TodoInput;
