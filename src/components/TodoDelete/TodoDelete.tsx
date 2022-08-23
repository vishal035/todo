import React from 'react';
import { Icon } from '@iconify/react';

interface IPropsType {
  id: string;
  deleteById: (id: string) => void;
}

const TodoDelete = ({ id, deleteById }: IPropsType) => {
  const onClickToDeleteHandler = (event: { target: any }) => {
    deleteById(event.target.getAttribute('id'));
    console.log('Deleted: ', event.target.getAttribute('id'));
  };

  return (
    <div
      id={id}
      onClick={onClickToDeleteHandler}
      className="absolute right-3 p-2 bg-red-100 rounded-md items-center w-fit hover:scale-110"
    >
      <Icon
        id={id}
        icon="fluent:delete-20-regular"
        className="text-red-600 hover:animate-wiggle hover:scale-110"
      />
    </div>
  );
};

export default TodoDelete;
