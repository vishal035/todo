import React from 'react';
import { Icon } from '@iconify/react';

// import { ClipboardListIcon } from '@heroicons/react/outline';
// <ClipboardListIcon className=" pl-2 text-green-400 w-10 " />

const TodoList = () => {
  return (
    <div className="shadow-2xl w-[80%] mx-auto mt-4 px-8 py-6 bg-gray-100">
      <ul>
        <li className="flex items-center px-4 py-2 w-4/6 bg-green-400 my-2">
          Hello World{' '}
          <Icon icon="line-md:close" className="text-black text-2xl" />
        </li>
        <li className="flex items-center px-4 py-2 w-4/6 bg-green-400 my-2">
          BMW M3 <Icon icon="line-md:close" className="text-black text-2xl" />
        </li>
        <li className="flex items-center px-4 py-2 w-4/6 bg-green-400 my-2">
          MSI <Icon icon="line-md:close" className="text-black text-2xl" />
        </li>
        <li className="flex items-center px-4 py-2 w-4/6 bg-green-400 my-2">
          Music <Icon icon="line-md:close" className="text-black text-2xl" />
        </li>
        <li className="flex items-center px-4 py-2 w-4/6 bg-green-400 my-2">
          Bass <Icon icon="line-md:close" className="text-black text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
