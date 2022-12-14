import { ITodo } from '../../../Types/Interface';
import ListItems from './ListItems';

// import { ClipboardListIcon } from '@heroicons/react/outline';
// <ClipboardListIcon className=" pl-2 text-green-400 w-10 " />

interface IPropsType {
  todos: ITodo[];
  onTodoDone: (updatedTodoData: ITodo) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onTodoDone, deleteTodo }: IPropsType) => {
  const onClickTodoDone = (event: any) => {
    // console.log({
    //   id: event.target.dataset.key,
    //   todo: event.target.innerText,
    //   done: Boolean(event.target.dataset.markedDone),
    // });
    onTodoDone({
      id: event.target.dataset.key,
      todo: event.target.innerText,
      done: event.target.dataset.markedDone,
    });
  };

  const deleteTodoHandler = (id: string) => {
    deleteTodo(id);
  };

  return (
    <div className="relative mx-8 mt-4 py-6 ">
      <ul className="flex flex-col items-center" onClick={onClickTodoDone}>
        {todos.map((todo) => (
          <ListItems
            todo={todo}
            key={todo.id}
            onTodoClick={onClickTodoDone}
            deleteTodoEvent={deleteTodoHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
