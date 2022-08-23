import React from 'react';
import { Icon } from '@iconify/react';
const TodoDelete = () => {
  return (
    <div className="absolute right-3 p-2 bg-red-100 rounded-md items-center w-fit hover:scale-110">
      <Icon
        icon="fluent:delete-20-regular"
        className="text-red-600 hover:animate-wiggle hover:scale-110"
      />
    </div>
  );
};

export default TodoDelete;
